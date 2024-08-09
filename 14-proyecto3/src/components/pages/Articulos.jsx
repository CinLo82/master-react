import { useState, useEffect } from "react"
import { Global } from "../../helpers/Global"
import { Peticion } from "../../helpers/Peticion"

export const Articulos = () => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        conseguirArticulos()
    }, [])

    const conseguirArticulos = async() => {
        
        const { datos, loading }  = await Peticion(Global.url+'listar', "GET", )

        if(datos.status === "success"){
            setArticles(datos.articles)
        }
        setLoading(false)
    }

    return (
        <>
            { loading ? "Cargando..." : (
                articles.length >= 1 ? (
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
                : 
                (
                    <h1>No hay articulos</h1>
                )
            )}  
        </>
    )

}