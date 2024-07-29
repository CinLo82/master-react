import React, { useState } from 'react'
import { GuardarEnStorage } from './helpers/GuardarEnStorage'

export const Crear = () => {

        const titleComponent = 'Añadir película'

        const [peliState, setPeliState] = useState({
            title: '',
            description: ''
        })

        const { title, description } = peliState

    const conseguirDatosForm = (e) => {
        e.preventDefault()
        let target = e.target
        let title = target.title.value
        let description = target.description.value

        //crear objeto de pelicula
        let peli = {
            id: new Date().getTime(),
            title,
            description
        }
        // guardar estado
        setPeliState(peli)
        
        // guardar en el almacenamiento local
        GuardarEnStorage('peliculas', peli)
    }

    return (
        <>
            <div className="add">
                <h3 className="title">{titleComponent}</h3>
                <strong>
                    {(title && description) && 'Has creado la película: ' + title }
                </strong>
                <form onSubmit={conseguirDatosForm}>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Título" 
                    />
                    <textarea 
                        placeholder="Descripcion" 
                        name="description"
                        id="description" >
                    </textarea>
                    <input 
                        type="submit" 
                        id="add" 
                        value="Guardar" 
                    />
                </form> 
            </div>
        </>
    )
}
