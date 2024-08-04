import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

    const {usuario, setUsuario} = useContext(PruebaContext)
    return (
        <div>
            <h1>Inicio</h1>
            <p>Página de inicio</p>
            {
                usuario.hasOwnProperty('nick') && usuario.nick !== null ? (
                    <p>Bienvenido {usuario.nick}</p>
                ) : (
                    <p>Identificate</p>
                )
            }
            {/* <p>Valor compartido: <strong>{compartida.nombre}</strong></p>*/}
        </div>
    )
}
