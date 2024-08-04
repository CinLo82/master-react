import React, { useId } from 'react'

export const MiComponente = () => {

    const id = useId()
    
    const segundoId = useId()
    console.log(id)
    console.log(segundoId)

    return (
        <div>
            <h1>Hola, soy el componente MiComponente</h1>
            {/*se crea un identificador unico tanto para el front como back */}
            <input id={id} name="nombre" placeholder='nombre'  />
            <h2>Hook useID</h2>
        </div>
    )
}
