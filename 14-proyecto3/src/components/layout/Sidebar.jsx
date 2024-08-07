
export const Sidebar = () => {
return (
    <aside className="lateral">
        <div className="search">
            <h3 className="title">Buscador</h3>
            <input type="text" name="search" id="search_field" placeholder="Buscar..." />
            <button id="search">Buscar</button>
        </div>
         {/* <div className="add">
           <h3 className="title">Añadir películas</h3>
            <form action="add.php" method="post">
                <input type="text" id="title" name="title" placeholder="Título" />
                <textarea placeholder="Descripcion" id="description" >
                </textarea>
                <input type="submit" id="add" value="Guardar" />
            </form>
        </div>*/}
    </aside>
    )
}
