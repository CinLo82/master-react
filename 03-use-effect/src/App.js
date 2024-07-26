import logo from './logo.svg';
import './App.css';
import { PruebasComponent } from './component/PruebasComponent';
import { AjaxComponent } from './component/AjaxComponent';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <AjaxComponent />
                <PruebasComponent />
            </header>
        </div>
    );
}

export default App;
