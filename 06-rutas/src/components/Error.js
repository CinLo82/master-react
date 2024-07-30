import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <strong>Esta página no existe</strong>
            <br />
            <Link to="/inicio">Volver al Inicio</Link>
        </div>
    )
}
