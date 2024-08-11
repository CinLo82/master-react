import { useState } from 'react';

export const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validarFormulario = () => {
        let errores = {};
        if (!formData.nombre.trim()) {
            errores.nombre = "El nombre es obligatorio";
        }
        if (!formData.email.trim()) {
            errores.email = "El correo electrónico es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errores.email = "El correo electrónico no es válido";
        }
        if (!formData.mensaje.trim()) {
            errores.mensaje = "El mensaje es obligatorio";
        }
        return errores;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const erroresValidacion = validarFormulario();
        if (Object.keys(erroresValidacion).length === 0) {
            // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
            console.log('Formulario enviado:', formData);
            setErrores({});
        } else {
            setErrores(erroresValidacion);
        }
    };

    return (
        <div className="jumbo">
            <h1>Contacto</h1>
            <p>Formulario de contacto</p>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleChange} 
                    />
                    {errores.nombre && <p className="error">{errores.nombre}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                    {errores.email && <p className="error">{errores.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea 
                        name="mensaje" 
                        value={formData.mensaje} 
                        onChange={handleChange} 
                    ></textarea>
                    {errores.mensaje && <p className="error">{errores.mensaje}</p>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};