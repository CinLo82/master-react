import React from 'react'
import { useMayus } from '../hook/useMayus'

export const PruebasCustom = () => {

    const {estado, mayusculas, minusculas, concatenar} = useMayus('Cinlo Losada WEB')

    return (
        <div>
            <h1>Probando componentes personalizados</h1>
            <h2>{estado}</h2>
            <button onClick={ mayusculas }>Poner en Mayuscula</button>
            <button onClick={ minusculas }>Poner en Minuscula</button>
            <button onClick={ e => concatenar('- Probando hook personalizados') }>Concatenar</button>
        </div>
    )
}
