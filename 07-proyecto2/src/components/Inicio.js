import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
    return (
        <div className='home'>
            <h1>Hola soy Cintia Losada <strong>desarrolladora web</strong> en Buenos Aires, y ofresco mis servicios de <strong>programación y desarrollo</strong> en todo tipo de proyectos web</h1>
            <h2>Te ayudo a crear tu sitio o aplicación web, tener mas visibilidad y relevancia en internet <Link to="/contacto">Contacta conmigo</Link></h2>
            <section className='lasts-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis trabajos en desarrollo web</p>
                <div className='works'>
                    <div className='work'>
                        <img src='https://via.placeholder.com/150' alt='imagen' />
                        <h3>Proyecto 1</h3>
                    </div>
                    <div className='work'>
                        <img src='https://via.placeholder.com/150' alt='imagen' />
                        <h3>Proyecto 2</h3>
                    </div>
                    <div className='work'>
                        <img src='https://via.placeholder.com/150' alt='imagen' />
                        <h3>Proyecto 3</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}
