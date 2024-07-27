

function App() {
    return (
        <div classNameName="App">
            <div className="layout">
                <header className="header">
                    <div className="logo">
                    <div className="play"></div>
                    </div>
                    <h1>Mis pelis</h1>
                </header>
                <nav className="nav">
                    <ul>
                        <li><a href="/#">Inicio</a></li>
                        <li><a href="/#">Películas</a></li>
                        <li><a href="/#">Blog</a></li>
                        <li><a href="/#">Contacto</a></li>
                    </ul>
                </nav>
                <section id="content" className="content">
                    <article className="peli-item">
                        <h3 className="title">Desarrollo web</h3>
                        <p className="description">Descripción de la película</p>
                        <button className="edit">Editar</button>
                        <button className="delete">Eliminar</button>
                    </article>
                </section>
                <aside className="lateral">
                    <div className="search">
                    <h3 className="title">Buscador</h3>
                    <input type="text" name="search" id="search_field" placeholder="Buscar..." />
                    <button id="search">Buscar</button>
                    </div>
                    <div className="add">
                    <h3 className="title">Añadir películas</h3>
                    <form action="add.php" method="post" />
                        <input type="text" id="title" name="title" placeholder="Título" />
                        <textarea placeholder="Descripcion" id="description" ></textarea>
                        <input type="submit" id="add" value="Guardar" 
                        />
                    </div>
                </aside>
            <footer className="footer">
                &copy Master en JS ES12 y TS
            </footer>
            </div>
            <script type="module" src="./js/main.js"></script>
            </div>
    )
};

export default App;
