
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

    const curso = {
        nombre: 'React',
        duracion: '5 semanas',
        costo: 'Gratis'
    }
    return (
        <div className="App">
            <PruebaContext.Provider value={curso}>
                <AppRouter />    
            </PruebaContext.Provider>
            
        </div>
    );
}

export default App;

