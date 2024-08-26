import { createContext, useEffect, useState } from 'react';
import { Global } from '../helpers/Global';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})

    useEffect(() => {
        authUser()
    }, [])

   const authUser = async() => {
        // sacar todos los datos del usuario en el localstorage
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        //comprobar si tenemos un token y un usuario
        if(!token || !user) {
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
                console.error('User profile not found in response:', data);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
            setAuth({ auth: false });
        }
    }
  return (
    <AuthContext.Provider
        value={{
            auth,
            setAuth
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;