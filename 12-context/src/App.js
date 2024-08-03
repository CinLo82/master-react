
import { useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

    const [usuario, setUsuario] = useState({
        nick: '@cinloweb',
        nombre: 'Cinlo',
        edad: 25,
        email: 'cinlo@cinlo'
    })

    const curso = {
        nombre: 'React',
        duracion: '5 semanas',
        costo: 'Gratis'
    }
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

