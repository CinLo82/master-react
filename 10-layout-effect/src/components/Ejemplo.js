import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Ejemplo = () => {

    const [mostrar, setMostrar] = useState(false)

    const caja = useRef()
    const boton = useRef()

    useLayoutEffect(() => {
        console.log('useLayoutEffect, componente cargado')
        let caja = document.getElementById('#caja')
    },[])

    useEffect(()=> {
        console.log('useEffect, componente cargado')

        if(caja.current === null) return

        const {bottom} = boton.current.getBoundingClientRect()
        console.log(bottom)

        caja.current.style.marginTop = `${bottom + 45}px`;

    }, [mostrar])
    return (
        <div>
            <h1>Ejemplo useEffect y useLayoutEffect</h1>
            <button ref={boton} onClick={() => setMostrar(!mostrar)}>Mostrar/Ocultar</button>
            {
                // useEffect se ejecuta después de que el DOM se haya actualizado
                // useLayoutEffect se ejecuta antes de que el DOM se haya actualizado
                mostrar && (
                    <div id="caja" ref={caja}>Hola, soy un div</div>
                )
            }
            

        </div>
    )
}
