import React, {useState} from 'react'

export const MiPrimerEstado = () => {
/* 
    let name = 'Cinlo'
    const handleClick = (e) => {
        name = 'Cinlo Dev'
*/
    const [name, setName] = useState('Cinlo Losada')

    const handleName = (e, nombreFijo) => {
        setName(nombreFijo)
        console.log(e.target)
    }

    return (
        <div>
            <h2>Mi primer componente con estado</h2>
            <strong className='label'>
                {name}
            </strong>
            <button onClick={e => handleName(e, 'Julieta')}>Cambiar nombre</button>
            &nbsp;
            <input 
                type='text' 
                onKeyUp={e => handleName(e, e.target.value)} 
                placeholder='cambia el nombre'
            />
        </div>
    )
}