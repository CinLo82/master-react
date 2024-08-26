import { useForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export const Login = () => {
    const { form, handleChange } = useForm({})
    const [saved, setSaved] = useState('not_sender')

    const { setAuth } = useAuth()

    const loginUser = async(e) => {
        e.preventDefault()

        const userToLogin = form
        try {
            const request = await fetch(Global.url + 'user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userToLogin)
            });

            if (!request.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await request.json();
            console.log(data);

            
            // Guarda el token en el localstorage
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))

            // Actualiza el estado del login según la respuesta
            setSaved('login')

            // set datos del usuario en el auth
            setAuth(data.user)
            // Redirecciona a la página principal
            setTimeout(() => {
                window.location.reload()
            }, 1000)
 

        } catch (error) {
            console.error('Error:', error);
            setSaved('error');
        }
    }

    return (
        <> 
        <header className="content__header content__header--public">
            <h1 className="content__title">Login</h1>
        </header>
        <div className="content__post">
            {saved === 'login' ?
                <strong className='alert alert-success'> Usuario logueado correctamente!!</strong>
            : ''}
            {saved === 'error' ?
                <strong className='alert alert-danger'>Usuario no se ha logueado!!</strong>
            : ''}
            <form 
                className='login-form'
                onSubmit={loginUser}
            >
                <div className='form-group'>
                    <label 
                        htmlFor='email' 
                        className='form__label'
                    >
                        Correo Electronico
                    </label>
                    <input 
                        type='email' 
                        name='email' 
                        id='email' 
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label 
                        htmlFor='password' 
                        className='form__label'
                    >
                        Contraseña
                    </label>
                    <input 
                        type='password' 
                        name='password' 
                        id='password' 
                        onChange={handleChange}
                    />
                </div>
                <input 
                    type='submit' 
                    value='Identificate'  
                    className='btn btn-success' 
                />
            </form>
        </div>
    </>
    )
}
