import React, { useState } from 'react'

export const FormularioComponent = () => {
    const [user, setUser] = useState({})

    const conseguirDatosForm = e => {
        e.preventDefault()

        let datos = e.target
        let user = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            biografia: datos.biografia.value,
            enviar: datos.enviar.value
        }
        console.log(user)
        setUser(user);
    }

    const cambiarDatos = e => {
        let name_del_input = e.target.name
        let user_for_mod = user

        setUser(estado_previo => {
            return {
                ...estado_previo,
                [name_del_input]: e.target.value
            }
        })
    }

    return (
        <div>
            <h1>Formulario de contacto</h1>
            {
                user.enviar && 
                (
                    <div className='label'>
                        <p>Nombre: {user.nombre}</p>
                        <p>Apellido: {user.apellido}</p>
                        <p>Genero: {user.genero}</p>
                        <p>Biografia: {user.biografia}</p>
                    </div>
                )
            }
            
            <form onSubmit={conseguirDatosForm}>
                <input 
                    type='text' 
                    placeholder='Nombre' 
                    name='nombre' 
                    onChange={cambiarDatos}
                />
                <input 
                    type='text' 
                    placeholder='Apellido' 
                    name='apellido'
                    onChange={cambiarDatos}
                />
                <select 
                    name='genero'
                    onChange={cambiarDatos}
                >
                    <option value='Hombre' >Hombre</option>
                    <option value='Mujer'>Mujer</option>
                </select>
                <textarea 
                    onChange={cambiarDatos}
                    id='mensaje' 
                    name='biografia' 
                    placeholder='Biografia'
                >    
                </textarea>
                <input 
                    type='submit' 
                    value='Enviar'
                    name='enviar'
                />
            </form>
        </div>
    )
}
