import { useState } from "react"
import { useForm } from "../../hooks/useForm"
import { Peticion } from "../../helpers/Peticion"
import { Global } from "../../helpers/Global"

export const Crear = () => {

    const { formulario, cambiado } = useForm()
    const [resultado, setResultado] = useState("no_enviado")

    const guardarArticulo = async(e) => {
        e.preventDefault
        
        //recoger datos del formulario
        let nuevoArticulo = formulario
        console.log(nuevoArticulo)

        //guardar articulo en el backend
        try {
            const { datos } = await Peticion(`${Global.url}/crear`, "POST", nuevoArticulo);
            console.log(datos);

            if (datos.status === "success") {
                setResultado("guardado");

                // Subir la imagen
                const fileInput = document.querySelector("#file");

                if (fileInput.files[0]) {
                    const formData = new FormData();
                    formData.append("file", fileInput.files[0]);

                    const subida = await Peticion(`${Global.url}/subir-imagen/`+datos.article._id, "POST", formData, true);

                    if (subida.datos.status === "success") {
                        setResultado("guardado");
                    } else {
                        setResultado("error");
                    }
                }
            } else {
                setResultado("error");
            }
        } catch (error) {
            console.error('Error al realizar la petición:', error);
            setResultado("error");
        }
    };

    return (
        <div className='jumbo'>
            <h1>Crear artículo</h1>
            <p>Formulario para crear un artículo</p>
            <strong>{resultado === "guardado" ? "Artículo guardado con éxito" : ""}</strong>
            <strong>{resultado === "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>
            {/*Montar el formulario */}
            <form 
                className="formulario" 
                onSubmit={guardarArticulo}
            >
                <div className="form-group">
                    <label 
                        htmlFor="titulo"
                    >
                        Titulo
                    </label>
                    <input 
                        type="text" 
                        name="title" 
                        onChange={cambiado}
                    />
                </div>
                <div className="form-group">
                    <label 
                        htmlFor="contenido"
                    >
                        Contenido
                    </label>
                    <textarea 
                        type="text" 
                        name="content" 
                        onChange={cambiado} 
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <label 
                        htmlFor="file"
                    >
                        Imagen
                    </label>
                    <input 
                        type="file" 
                        name="file" 
                        id="file"
                    />
                </div>
                <input 
                    type="submit" 
                    value="Guardar" 
                    className="btn btn-success"
                />
            </form>
        </div>
    )
}
