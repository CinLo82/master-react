import { useForm } from "../../hooks/useForm"

export const Register = () => {

    const { form, handleChange } = useForm({})

    const saveUser = (e) => {
        e.preventDefault()

        let newUser = form
       console.log(newUser)
    }
    return (
        <> 
            <header className="content__header content__header--public">
                <h1 className="content__title">Register</h1>
            </header>
            <div className="content__post">
                <form 
                    className="register-form"
                    onSubmit={saveUser}
                >
                    <div className="form-group">
                        <label 
                            htmlFor="name" 
                            className="form__label"
                            >Nombre
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label 
                            htmlFor="surname" 
                            className="form__label"
                        >
                            Apellido
                        </label>
                        <input 
                            type="text" 
                            name="surname" 
                            id="surname" 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label 
                            htmlFor="nick" 
                            className="form__label"
                        >
                            Nick
                        </label>
                        <input 
                            type="text" 
                            name="nick" 
                            id="nick" 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label 
                            htmlFor="email" 
                            className="form__label"
                        >
                            Correo Electronico
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label 
                            htmlFor="password" 
                                className="form__label"
                            >
                                Contraseña
                            </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={handleChange} 
                        />
                    </div>
                    <input 
                        type="submit" 
                        value="Enviar"  
                        className="btn btn-success" 
                    />
                </form>

            </div>
        </>
    )
}
