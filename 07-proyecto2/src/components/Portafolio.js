import React from 'react'

export const Portafolio = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Portafolio</h1>
            <section className='portafolio'>
                <article className='work'>
                    <img src='https://via.placeholder.com/150' alt='imagen' />
                    <h2>Proyecto 1</h2>
                    <p>Descripción del proyecto 1</p>
                </article>
                <article className='work'>
                    <img src='https://via.placeholder.com/150' alt='imagen' />
                    <h2>Proyecto 2</h2>
                    <p>Descripción del proyecto 2</p>
                </article>
                <article className='work'>
                    <img src='https://via.placeholder.com/150' alt='imagen' />
                    <h2>Proyecto 3</h2>
                    <p>Descripción del proyecto 3</p>
                </article>
            </section>
        </div>
    )
}
