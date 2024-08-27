import { createContext, useEffect, useState } from 'react';
import { Global } from '../helpers/Global';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})
    const [counters, setCounters] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        authUser()
    }, [])

   const authUser = async() => {
        // sacar todos los datos del usuario en el localstorage
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        //comprobar si tenemos un token y un usuario
        if(!token || !user) {
            setLoading(false)
            return setAuth({auth: false})

        }
        //transformar mis datos a un objeto
        const userObj = JSON.parse(user);
        const userId = userObj.id;

        //peticion al backend para comprobar si el token es valido, devolver el usuario
        try {
            const request = await fetch(Global.url + 'user/profile/' + userId, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            });
            const data = await request.json();

            // Verifica que data.user existe antes de llamar a setAuth
            if (data && data.userProfile) {
                setAuth(data.userProfile);
            } else {
                setAuth({ auth: false });
                console.error('Perfil de usuario no encontrado en la respuesta:', data);
            }

            // Peticion para los contadores
            const requestCounters = await fetch(Global.url + 'user/counters/' + userId, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            });

            // Verifica si la respuesta es exitosa
            if (!requestCounters.ok) {
                throw new Error('Error al obtener los contadores: ' + requestCounters.statusText);
            }

            const dataCounters = await requestCounters.json();

            // Verifica que dataCounters no contiene un error antes de llamar a setCounters
            if (dataCounters && dataCounters.status !== 'error') {
                setCounters(dataCounters);
            } else {
                setCounters({});
                console.error('Error en la respuesta de los contadores:', dataCounters);
            }
            setLoading(false);

        } catch (error) {
            console.error('Error al obtener el perfil de usuario o los contadores:', error);
            setAuth({ auth: false });
        }
    }
  return (
    <AuthContext.Provider
        value={{
            auth,
            setAuth,
            counters,
            setCounters,
            loading
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;