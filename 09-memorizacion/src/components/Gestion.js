import React, { useEffect, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState('')
    const [pagina, setPagina] = useState(1)

    const asignarGestor = e => {
        setNombre(e.target.value)
    }
    useEffect(()=> {
        console.log('Se ha vuelto a renderizar la vista de gestion')
    },[])

    return (
        <div>
            <h1>Nombre del gestor: {nombre}</h1>
            <input 
                type="text"
                placeholder='Introduce tu nombre de gestor'
                onChange={asignarGestor} 
            />
            <h2>Listado de empleados:</h2>
            <p>Los usuarios son administrados por {nombre} y vienen de jsonplaceholder</p>
            <button onClick={() => { setPagina(1)}}>Pagina 1</button>
            <button onClick={() => { setPagina(2)}}>Pagina 2</button>
            <Empleados pagina={pagina}/>
        </div>
    )
}
