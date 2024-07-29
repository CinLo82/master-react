import React, { useEffect, useState } from 'react'

export const Listado = () => {

    const [listadoState, setListadoState] = useState([])

    useEffect(() => {
        console.log('Componentes de peliculas cargadas')
        conseguirPeliculas()
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('peliculas'))

        setListadoState(peliculas)
    }

    return (
        <>
            {listadoState && listadoState.length > 0 ?
                listadoState.map( peli => {
                    return (
                        peli && (
                            <article className="peli-item" key={peli.id}>
                                <h3 className="title">{peli.title}</h3>
                                <p className="description">{peli.description}</p>
                                <button className="edit">Editar</button>
                                <button className="delete">Eliminar</button>
                            </article>
                        )
                        
                    )
                })
                : <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}
