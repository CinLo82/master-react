import logo from './logo.svg';
import './App.css';
import { EjercicioComponent } from './component/EjercicioComponent';

function App() {
    const fecha = new Date()
    const yearCurrent = fecha.getFullYear()
    console.log(yearCurrent)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Ejercicio</h1>
                <EjercicioComponent year={yearCurrent}/>
            </header>
        </div>
    );
}

export default App;
