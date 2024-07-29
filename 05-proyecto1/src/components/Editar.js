import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState
}) => {
    const guardarEdicion = (e, id) => {
        e.preventDefault()
        // conseguir el target del evento
        const target = e.target
        // conseguir el indice de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas()
        console.log(pelis_almacenadas)
        const index = pelis_almacenadas.findIndex( peli => peli.id === id)
        //crear objeto con ese indice
        const peli_actualizada = {
            id: id,
            title: target.title.value,
            description: target.description.value
        }
        // actualizar el listado de peliculas
        pelis_almacenadas[index] = peli_actualizada
        // actualizar el almacenamiento local
        localStorage.setItem('peliculas', JSON.stringify(pelis_almacenadas))
        // actualiza los estados
        setListadoState(pelis_almacenadas)
        setEditar(0)
    }

    const title_component = 'Editar Pelicula  '
    return (
        <div className='edit_form'>
            <h3 className='title'>{title_component}</h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input 
                    type='text'
                    className='title_edited'
                    name='title'
                    defaultValue={peli.title}
                />
                <textarea 
                    className='description_edited'
                    name='description'
                    defaultValue={peli.description}
                />
                <input 
                    className='editar'
                    type='submit'
                    value='Actualizar'
                />
            </form>
        </div>
    )
}
