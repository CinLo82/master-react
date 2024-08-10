import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Global } from "../../helpers/Global"
import { Peticion } from "../../helpers/Peticion"
import { Listado } from "./Listado"

export const Busqueda = () => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        conseguirArticulos()
    }, [])

    useEffect(() => {
        conseguirArticulos()
    }, [params])


    const conseguirArticulos = async() => {
        
        const { datos } = await Peticion(Global.url+'buscar/' + params.busqueda, "GET")

        if(datos.status === "success"){
            setArticles(datos.articles)
        } else {
            setArticles([])
        }
        setLoading(false)
    }

    return (
        <>
            { loading ? "Cargando..." : 
                (articles && articles.length >= 1) ? 
                    < Listado 
                        articles={articles}
                        setArticles={setArticles}
                    /> : <h1>No hay articulos</h1>
            }  
        </>
    )

}