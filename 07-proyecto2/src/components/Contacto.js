import React from 'react'

export const Contacto = () => {
    return (
        <div className='page'> 
            <h1 className='heading'>Contacta conmigo</h1>

            <form className='contact' action='cinlos3382@gmail.com' >
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Apellido' /> 
                <input type="email" placeholder='Email' />
                <textarea placeholder='Mensaje'></textarea>
                <input type='submit' value='enviar' />
            </form>
        </div>
    )
}
