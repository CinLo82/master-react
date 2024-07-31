import React, {useRef} from 'react'

export const Formulario = () => {

    const nombreInput = useRef()
    const apellidoInput = useRef()
    const emailInput = useRef()

    const miCaja = useRef()

    const mostrar = e => {
        e.preventDefault()
        console.log(nombreInput.current.value)
        console.log(apellidoInput.current.value)
        console.log(emailInput.current.value)

        //mi caja
        let { current: caja } = miCaja
        caja.classList.add('fondoVerde')
        caja.innerHTML = 'FORMULARIO ENVIADO'
    }

    return (
        <div>
            <div ref={miCaja} className='caja'>
                <h2>pruebas con useRef</h2>
            </div>
            <form onSubmit={mostrar}>
                <input type="text" placeholder='Nombre' ref={nombreInput}/> <br/>
                <input type="text" placeholder='Apellido'ref={apellidoInput}/> <br/>
                <input type="email" placeholder='Correo Electronico'ref={emailInput}/> <br/>
                <input type='submit' value='Enviar'/> <br/>
            </form>
        </div>
    )
}
