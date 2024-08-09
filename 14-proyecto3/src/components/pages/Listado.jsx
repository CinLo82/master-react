
export const Listado = ({ articles, setArticles}) => {
    return (
        articles.map(article => {
            return (
                <article className="articulo-item" key={article._id}>
                    <div className="mask">
                        <img src="https://via.placeholder.com/300" alt="imagen" />
                    </div>
                    <div className="datos">
                        <h3 className="title">{article.title}</h3>
                        <p className="description">{article.content}</p>
                        <button className="edit">Editar</button>
                        <button className="delete">Eliminar</button>
                    </div>
                </article> 
            )  
        })
    )
}
