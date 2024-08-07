import { useState, useEffect } from "react"

export const Articulos = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        conseguirArticulos()
    }, [])

    const conseguirArticulos = async() => {
        const url = 'http://localhost:3900/api/listar'
        let peticion = await fetch(url, {
            method: "GET"
        })
        
        let datos = await peticion.json()
        console.log(datos)

        if(datos.status === "success"){
            setArticles(datos.articles)
        }
    }

    return (
        <>
            {
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
            }     
        </>
    )

}