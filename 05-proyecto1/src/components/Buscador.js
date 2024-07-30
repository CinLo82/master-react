import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    const [busqueda, setBusqueda] = useState('')
    const [noEncontrado, setNoEncontrado] = useState(false)

    const buscarPeli = (e) => {
        e.preventDefault()
        // crear estado y actualizarlo
        setBusqueda(e.target.value)
        // filtrar para buscar las coincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.title.toLowerCase().includes(busqueda.toLowerCase())
        })

        if(busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem('peliculas'))
            setNoEncontrado(true)
        } else {
            setNoEncontrado(false)
        }

        console.log(pelis_encontradas)
        // actualizar el listado principal con lo que he logrado filtrar
        setListadoState(pelis_encontradas)

    }


    return (
        <>
            <div className="search">
                <h3 className="title">Buscador: {busqueda}</h3>
                {(noEncontrado === true && busqueda.length > 1) && (
                    <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
                )}
                <form>
                    <input 
                        type="text" 
                        name="search" 
                        id="search_field" 
                        onChange={buscarPeli}
                    />
                    <button id="search">Buscar</button>
                </form>
            </div>
        </>
    )
}
