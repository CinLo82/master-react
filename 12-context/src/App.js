
import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        // la primera vez q se carga el componente
        console.log('useEffect una vez')
        localStorage.getItem('usuario')
        let usuario_local = (JSON.parse(localStorage.getItem('usuario')))
            setUsuario(usuario_local)
    }, [])

    useEffect(() => {
        console.log('useEffect cambio en usuario')
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }, [usuario])

    return (
        <div className="App">
            <PruebaContext.Provider value={{
                usuario,
                setUsuario,
            }}>
                <AppRouter />    
            </PruebaContext.Provider>
            
        </div>
    );
}

export default App;

