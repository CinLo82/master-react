import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    // valores por defecto en parametros opcionales
    //let {nombre='Cinlo', apellido='Losada'} = useParams()

    const {nombre, apellido} = useParams()
    const navegar = useNavigate()

    const enviar = (e) => {
        e.preventDefault()
        let nombre = e.target.nombre.value
        let apellido = e.target.apellido.value
        let url =`/persona/${nombre}/${apellido}`

        if(nombre.length >= 0 && apellido >= 0 ){
            navegar("/")
        } else if (nombre === 'contacto') {
            navegar("/contacto")
        } else {
            navegar(url)
        }
    }

    return (
        <div>
            {!nombre && <h1>No hay personas que mostrar</h1>}
            {nombre && <h1>Pagina de la persona: {nombre} {apellido}</h1>} 
            <p>Esta es nuestra página de persona</p>
            <form onSubmit={enviar}>
                <input type="text" name="nombre" />
                <input type="text" name="apellido" />
                <input type="submit" value="enviar"/>
            </form>
        </div>
    )
}
