import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";
import { Crear } from "./components/Crear";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {

    const [listadoState, setListadoState] = useState([])


    return (
        <div className="App">
            <div className="layout">
                <Header />
                <Nav />
                <section id="content" className="content">
                    <Listado 
                        listadoState={listadoState}
                        setListadoState={setListadoState}
                    />
                </section>
                <aside className="lateral">
                    <Buscador 
                        listadoState={listadoState}
                        setListadoState={setListadoState}
                    />
                    <Crear 
                        setListadoState={setListadoState}
                    />
                </aside>
                <Footer />
            </div>
        </div>
    )
};

export default App;
