import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas]= useState([])
    const [contador, setContador] = useState(0)

    const guardarTareas = e => {
        e.preventDefault()
        setTareas(tarea => [...tarea, e.target.descripcion.value])
    }

    const borrarTarea = index => {
        setTareas(tarea => tarea.filter((tarea, i) => i !==
        index))
    }

    const sumarAlContador = ()=> {
        setContador(contador + 1)
    }

    const contadoresPasados = (acumulacion) => {
        for(let i = 0; i <= acumulacion; i++)
            console.log('ejecutando cumulaciond de contadores')

        return `Contador manual de tareas: ${acumulacion}`
    }

    const contadorMemo = useMemo(() => {
        contadoresPasados(contador)
    }, [contador])

    return (
        <div className='tareas'>
            <h1>Mis tareas</h1>
            <form onSubmit={guardarTareas}>
                <input type="text" name="descripcion" placeholder='Introduce una tarea'/>
                <br/>
                <input type="submit" value='Guardar'/>
            </form>
            <h3>{contadorMemo}</h3>
            <button onClick={sumarAlContador}>Sumar</button>
            <h3>Lista de tareas</h3>
            <ul>
                {
                    tareas.map((tarea, index) => {
                        return (
                            <li key={index}>
                                {tarea} 
                                &nbsp;
                                <button onClick={() => borrarTarea(index)}>X</button>
                            </li>
                        )
                        
                    })
                }
            </ul>
        </div>
    )
}
