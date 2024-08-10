import { Global } from "../../helpers/Global"
import { Peticion } from "../../helpers/Peticion"

export const Listado = ({ articles, setArticles}) => {

    let deleteArticle = async(id) => {

        const { datos } = await Peticion(`${Global.url}/borrar/`+id, "DELETE");
            if(datos.status === "success"){
                let articleUpdate = articles.filter(article => article._id !== id)
                setArticles(articleUpdate)
            }
        console.log(datos);
    }

    return (
        articles.map(article => {
            return (
                <article className="articulo-item" key={article._id}>
                    <div className="mask">
                        {
                            article.image && article.image !== "default.png" ? (
                                <img src={`${Global.url}/imagen/${article.image}`} alt="imagen" />
                            ) : (
                                <img src="https://via.placeholder.com/300" alt="imagen" />
                            )
                        }
                    </div>
                    <div className="datos">
                        <h3 className="title">{article.title}</h3>
                        <p className="description">{article.content}</p>
                        <button className="edit">Editar</button>
                        <button 
                            className="delete"
                            onClick={() => {deleteArticle(article._id)}}
                        >
                            Eliminar
                        </button>
                    </div>
                </article> 
            )  
        })
    )
}
