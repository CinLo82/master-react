import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import avatar from '../../assets/img/user.png';
import { Global } from '../../helpers/Global';

export const Config = () => {

    const { auth } = useAuth()
    const [saved, setSaved] = useState('not_saved')

    const updateUser = async(e) => {
        e.preventDefault()           
        console.log(auth)
    }


    return (
        <>
            <header className='content__header content__header--public'>
                <h1 className='content__title'>Ajustes</h1>
            </header>
            <div className='content__post'>
            {saved === 'saved' ?
                <strong className='alert alert-success'> Usuario registrado correctamente!!</strong>
            : ''}
            {saved === 'error' ?
                <strong className='alert alert-danger'>Usuario no se ha registrado!!</strong>
            : ''}
                <form 
                    className='config-form'
                    onSubmit={updateUser}
                >
                    <div className='form-group'>
                        <label 
                            htmlFor='name' 
                            className='form__label'    
                        >
                            Nombre
                        </label>
                        <input 
                            type='text' 
                            name='name' 
                            id='name'
                            defaultValue={auth.name} 
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='surname' 
                            className='form__label'
                        >
                            Apellido
                        </label>
                        <input 
                            type='text' 
                            name='surname' 
                            id='surname' 
                            defaultValue={auth.surname}
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='nick' 
                            className='form__label'
                        >
                            Nick
                        </label>
                        <input 
                            type='text' 
                            name='nick' 
                            id='nick' 
                            defaultValue={auth.nick}
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='bio' 
                            className='form__label'
                           
                        >
                            Bio
                        </label>
                        <textarea 
                            type='text' 
                            name='bio' 
                            id='bio' 
                            defaultValue={auth.bio}
                        />
                    </div>
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
                            defaultValue={auth.email}
                    
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
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='file0' 
                        >
                            Avatar
                        </label>
                        <div className="geral-info__container-avatar">
                            {auth.image !== 'default.png' && <img src={Global.url + 'user/avatar/' + auth.image} className="container-avatar__image" alt="Foto de perfil" />}
                            {auth.image === 'default.png' && <img src={avatar} className="container-avatar__image" alt="Foto de perfil" />}                       
                        </div>
                        <br />
                        <input 
                            type='file' 
                            name='file0' 
                            id='file' 
               
                        />
                    </div>
                    <br/>
                    <input 
                        type='submit' 
                        value='Enviar'  
                        className='btn btn-success' 
                    />
                </form>
            </div>  
        </>
    )
}
