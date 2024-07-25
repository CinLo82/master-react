import React from "react";

const MiComponente = () => {

    let name = 'Cinlo'
    let web = 'cinloweb.com'
    
    let user = {
        name: 'Cinlo',
        apellido: 'Losada',
        web: 'cinloweb.com'

    }
    return (
        <>
            <h1>Mi componente</h1>
            <h2>Datos del usuario</h2>
            <ul>
                <li>Nombre: {name}</li>
                <li>Web: <strong>{web}</strong></li>
            </ul>
            <ul>
                <li>Nombre: {user.name}</li>
                <li>Apellido: {user.apellido}</li>
                <li>Web: <strong>{user.web}</strong></li>
            </ul>
    
        </>
    )
}

export default MiComponente;