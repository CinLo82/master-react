import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent'

export const PruebasComponent = () => {
        
    const [user, setUser] = useState('Cinlo Losada')
    const [fecha, setFecha] = useState('01-02-1999')
    const [contador, setContador] = useState(0)

    const modUser = (e) => {
        setUser(e.target.value)
    }
    
    const cambiarFecha = () => {
        setFecha(Date.now())
    }

    useEffect(() => {
        console.log('Haz cargado el componente PruebasComponent')
    }, [])

    //Se ejecuta solo si cambio el usuario
    useEffect(() => {
        setContador(contador+1)
        console.log('Haz modificado el usuario '+ contador)

    }, [user, fecha])



    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>
            <strong className={contador >= 10 ? 'label label-green' : 'label'}>{user}</strong>
            <strong>{fecha}</strong>
            <br />
            <p>
                <input 
                    className='input'
                    type='text' 
                    onChange={ modUser } 
                    placeholder='change name'
                />
                <button onClick={cambiarFecha} >
                    Cambiar fecha
                </button>
            </p>
            { user == 'CINLO' && <AvisoComponent />}
        </div>
    )
}
