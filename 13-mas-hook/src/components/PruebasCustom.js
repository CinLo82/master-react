import React from 'react'
import { useMayus } from '../hook/useMayus'

export const PruebasCustom = () => {

    const {mayusculas, minusculas, concatenar} = useMayus('Cinlo Losad Web')

    console.log(concatenar('is the better'))

    return (
        <div>
            <h1>Probando componentes personalizados</h1>
        </div>
    )
}
