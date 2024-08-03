import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {

    const datoDesdeContext = useContext(PruebaContext)

    return (
        <div>
            <h1>Contacto</h1>
            <p>Información de contacto</p>
            <p>datos context: <strong>{datoDesdeContext.duracion}</strong></p>
        </div>
    )
}
