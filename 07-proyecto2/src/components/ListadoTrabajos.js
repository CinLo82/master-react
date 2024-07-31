import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = ({limite}) => {
    return (
        <section className='works'>
            {trabajos.slice(0,limite).map((trabajo) => (
                <article key={trabajo.id} className='work-item'>
                    <div className='mask'>
                        <img src={"/images/"+trabajo.id+".png"} />
                    </div>
                    <span>{trabajo.Categorias}</span>
                    <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.name}</Link></h2>
                    <h3>{trabajo.tecnologias}</h3>
                </article>
            ))}
        </section>

    )
}
