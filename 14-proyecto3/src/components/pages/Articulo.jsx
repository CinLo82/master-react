import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Global } from "../../helpers/Global"
import { Peticion } from "../../helpers/Peticion"

export const Articulo = () => {

    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        conseguirArticulo()
    }, [])

    const conseguirArticulo = async() => {
        
        const { datos }  = await Peticion(Global.url+'listar/'+ params.id, "GET", )
        setArticle(datos)

        if(datos.status === "success"){
            setArticle(datos.article)
        }
        setLoading(false)
        console.log(article)
    }

    return (
        <div className="jumbo">
            { loading ? "Cargando..." : 
                <>
                    <div className="mask">
                        {
    
                            article.image && article.image !== "default.png" ? (
                                <img src={`${Global.url}/imagen/${article.image}`} alt="imagen" />
                            ) : (
                                <img src="https://via.placeholder.com/300" alt="imagen" />
                            )
                        }
                    </div>
                    <h1>{article.title}</h1>
                    <span>{article.date}</span>
                    <p>{article.content}</p>
                </>
        }  
        </div>
    )

}