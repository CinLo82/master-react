import React, { useEffect } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

    useEffect(() => {
        console.log('Componentes de peliculas cargadas')
        conseguirPeliculas()
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('peliculas'))

        setListadoState(peliculas)

        return peliculas
    }

    const borrarPeli = (id) => {
        // conseguir las peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas()
        // filtrar esas peliculas para que se elimine la q no quiero
        let pelis_filtradas = pelis_almacenadas.filter( peli => peli.id !== parseInt(id))
        // actualizar el estado del listado
        setListadoState(pelis_filtradas)
        // actualizar los datos en el almacenamiento local
        localStorage.setItem('peliculas', JSON.stringify(pelis_filtradas))
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
                                <button 
                                    className="delete"
                                    onClick={() => borrarPeli(peli.id)}
                                >
                                    Eliminar
                                </button>
                            </article>
                        )
                        
                    )
                })
                : <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}
