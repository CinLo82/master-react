import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Proyecto = () => {

    const [proyecto, setProyect] = useState({})
    const params = useParams()


    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id)
        setProyect(proyecto[0])
    }, [])


    return (
        <div className='page page-work' >
            <img width={500} src={"/images/"+proyecto.id+".png"} />
            <h1 className='heading'>{proyecto.name}</h1>
            <h3>{proyecto.tecnologias}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={'https://'+proyecto.url} target='_blank'>Ir al proyecto</a>
        </div>
    )
}
