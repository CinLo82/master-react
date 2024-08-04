import React, { useState } from 'react'

export const MiFormulario = () => {

    const [formulario, setFormulario] = useState({})

    const serializarFormulario = (Formulario) => {
        const formData = new FormData(Formulario);
        const objetoCompleto = {};

        for(let [name, value] of formData){
            objetoCompleto[name] = value;
        }
        return objetoCompleto;
    }

    const enviado = (e) => {
        e.preventDefault()
        /* 
        let curso = {
            titulo: e.target.titulo.value,
            year: e.target.year.value,
            descripcion: e.target.descripcion.value,
            autor: e.target.autor.value,
            email: e.target.email.value
        }*/
        let curso = serializarFormulario(e.target)
        setFormulario(curso)
    }

    return (
        <div>
            <h1>Mi Formulario</h1>
            <p>Mi Formulario para guardar un curso</p>
            <p>Curso guardado:</p>
            <pre>
                {JSON.stringify(formulario, null, 2)}
            </pre>
            <form 
                className='mi-formulario'
                onSubmit={enviado}
            >
                <input 
                    type="text" 
                    name="titulo" 
                    placeholder="Nombre del curso" 
                />
                <input 
                    type="number" 
                    name="year" 
                    placeholder="Año de publicación" 
                />
                <textarea 
                    name='descripcion' 
                    placeholder='Descripción'
                />
                <input 
                    type="text" 
                    name='autor' 
                    placeholder="Autor" 
                />
                <input 
                    type="email" 
                    name='email' 
                    placeholder="Correo de contacto" 
                />
                <input 
                    type='submit' 
                    value='Enviar'
                />
            </form>
        </div>
    )
}
