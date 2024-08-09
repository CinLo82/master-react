import { useState, useEffect } from "react"
import { Global } from "../../helpers/Global"
import { Peticion } from "../../helpers/Peticion"
import { Listado } from "./Listado"

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
            { loading ? "Cargando..." : 
                articles.length >= 1 ? 
                    < Listado 
                        articles={articles}
                        setArticles={setArticles}
                    /> : <h1>No hay articulos</h1>
            }  
        </>
    )

}