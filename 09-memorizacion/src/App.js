
import './App.css';
import { Tareas } from './components/Tareas';
{/*import { Gestion } from './components/Gestion';*/}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/*Ejercicio con metodo memo(Gestion)*/}
          {/*<Gestion />*/}

        {/*Ejercicio con hook memo(Tareas) />*/}
        <Tareas />
      </header>
    </div>
  );
}

export default App;
