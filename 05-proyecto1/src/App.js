import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";
import { Crear } from "./components/Crear";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
    return (
        <div className="App">
            <div className="layout">
                <Header />
                <Nav />
                <section id="content" className="content">
                    <Listado />
                </section>
                <aside className="lateral">
                    <Buscador />
                    <Crear />
                </aside>
                <Footer />
            </div>
        </div>
    )
};

export default App;
