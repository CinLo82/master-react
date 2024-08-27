import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import avatar from '../../assets/img/user.png';
import { Global } from '../../helpers/Global';
import { SerializeForm } from "../../helpers/SerializeForm";

export const Config = () => {

    const { auth, setAuth } = useAuth()
 
    const [saved, setSaved] = useState('not_saved')

    const updateUser = async(e) => {
        e.preventDefault()           
        
        const token = localStorage.getItem('token')

        //Recoger datos del formulario
        let newDataUser = SerializeForm(e.target)

        //borrar data innecesaria
        delete newDataUser.file0

        // actualizar usuario en la base de datos
        const request = await fetch(Global.url + 'user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(newDataUser)
        })

        const data = await request.json()
       

        if(data && data.status === 'success' && data.user) {
            delete data.user.password

            setAuth(data.user)
            setSaved('saved')
       
        } else {
            setSaved('error')
        }
        //subida de imagen
        const fileInput = document.querySelector('#file')

        if(data.status === 'success' && fileInput && fileInput.files.length > 0) {

            const formData = new FormData()
            formData.append('file0', fileInput.files[0])

            //peticion para enviar la imagen
            const uploadRequest = await fetch(Global.url + 'user/upload', {
                method: 'POST',
                headers: {
                    'Authorization': token
                },
                body: formData
            })

            const uploadData = await uploadRequest.json()
       

            if(uploadData.status === 'success' && uploadData.userUpdated) {
                delete uploadData.userUpdated.password

                setAuth(uploadData.userUpdated)
                setSaved('saved')
         
            } else {
                setSaved('error')
            }
        }
    }


    return (
        <>
            <header className='content__header content__header--public'>
                <h1 className='content__title'>Ajustes</h1>
            </header>
            <div className='content__post'>
                {saved === 'saved' && (
                    <strong className='alert alert-success'>Usuario actualizado correctamente!!</strong>
                )}
                {saved === 'error' && (
                    <strong className='alert alert-danger'>Usuario no actualizado!!</strong>
                )}
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
