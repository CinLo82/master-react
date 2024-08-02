import React, { useReducer, useEffect } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('juegos')) || []
}


export const MisJuegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('juegos', JSON.stringify(juegos))
    }, [juegos])

    const conseguirDatosForm = (e) => {
        e.preventDefault();
        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        }
        console.log(juego);

        const action = {
            type: 'AGREGAR_JUEGO',
            payload: juego
        }

        dispatch(action)
    }

    const borralo = (id) => {
        const action = {
            type: 'BORRAR_JUEGO',
            payload: id
        }
        dispatch(action)
    }

    const editar = (e, id) => {
        console.log(e.target.value,'editar', id)
        let juego = {
            id,
            titulo: e.target.value,
            descripcion: e.target.value
        }

        const action = {
            type: 'EDITAR_JUEGO',
            payload: juego
        }
        dispatch(action)
    }

    return (
        <div>
            <h1>Estos son mis videoJuegos</h1>
            <p>Numeros de videojuegos: {juegos.length}</p>
            <ul>
                {
                    juegos.map(juego => (
                        <li key={juego.id}>
                            {juego.titulo} - {juego.descripcion}
                                &nbsp; <button onClick={e => borralo(juego.id)}>X</button>
                                <input 
                                    type='text' 
                                    onBlur={ e => editar(e, juego.id)} 
                                    onKeyPress={e => {
                                        if(e.key === 'Enter'){
                                            editar(e, juego.id)
                                            console.log('Haz presionado el enter')
                                        }
                                    }}
                                />
                        </li>
                    ))
                }
            </ul>
            <h3>Agregar Juego</h3>
            <form onSubmit={conseguirDatosForm}>
                <input type="text" name="titulo" placeholder="Nombre del juego" />
                <textarea name="descripcion" placeholder='Descripcion'/>
                <input type='submit' value="Agregar" />
            </form>
        </div>
    )
}
