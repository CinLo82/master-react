import { useForm } from '../hook/useForm'

export const MiFormulario = () => {

    const {formulario, enviado, cambiado} = useForm({})

    return (
        <div>
            <h1>Mi Formulario</h1>
            <p>Mi Formulario para guardar un curso</p>
            <p>Curso guardado:{formulario.titulo}</p>
            <pre className='codigo'>
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
                    onChange={cambiado}
                />
                <input 
                    type="number" 
                    name="year" 
                    placeholder="Año de publicación" 
                    onChange={cambiado}
                />
                <textarea 
                    name='descripcion' 
                    placeholder='Descripción'
                    onChange={cambiado}
                />
                <input 
                    type="text" 
                    name='autor' 
                    placeholder="Autor" 
                    onChange={cambiado}
                />
                <input 
                    type="email" 
                    name='email' 
                    placeholder="Correo de contacto" 
                    onChange={cambiado}
                />
                <input 
                    type='submit' 
                    value='Enviar'
                />
            </form>
        </div>
    )
}
