import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Sidebar = () => {

    const [buscar, setbuscar] = useState("")
    const navegar = useNavigate()

    const hacerBusqueda = (e) => {
        e.preventDefault();
        const mi_busqueda = e.target.search_name.value;
        if (mi_busqueda.trim() !== "") {
            navegar(`/buscar/${mi_busqueda}`, { replace: true });
        }
    };

return (
    <aside className="lateral">
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form onSubmit={hacerBusqueda}>
                <input type="text" name="search_name" id="search_field" placeholder="Buscar..." />
                <input type="submit" id="search" value="Buscar"/>
            </form>
        </div>

    </aside>
    )
}
