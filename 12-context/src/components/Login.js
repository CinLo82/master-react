import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Login = () => {

    const {usuario, setUsuario} = useContext(PruebaContext)

    const guardarDatos = (e) => {
        e.preventDefault()
        
        let usuario_idenficado = {
            nick: e.target.nick.value,
            nombre: e.target.nombre.value,
            email: e.target.email.value
        }
        console.log(usuario)
        setUsuario(usuario_idenficado)
    }

    return (
        <div>
            <h1>Login</h1>
            <p>Formulario de login</p>
            <form className='login' onSubmit={guardarDatos}>
                <input type="text" name="nick" placeholder='Nickname' />
                <input type="text" name="nombre" placeholder='Nombre' />
                <input type="email" name="email" placeholder='email' />
                <input type='submit' value='Enviar'/>
            </form>
        </div>
    )
}
