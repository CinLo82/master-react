import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        // cuanso el componente se monta
        alert('el componente AvisoComponent esta montado!!!')

        //cuando el componente se desmonta
        return () => {
            alert('el componente AvisoComponent se ha desmontado');
        }
    }, [])// se ejecuta solo una vez porq le paso el array vacio


    return (
        <div>
            <h1>Saludos Cinlo, Como estas hoy?</h1>
            <button onClick={e => {
                alert('Bienvenida!')
            }}>Mostar alerta</button>
        </div>
    )
}
