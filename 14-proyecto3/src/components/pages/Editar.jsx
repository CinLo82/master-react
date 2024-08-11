import { useState, useEffect } from "react"
import { useForm } from "../../hooks/useForm"
import { Peticion } from "../../helpers/Peticion"
import { Global } from "../../helpers/Global"
import { useParams } from "react-router-dom"

export const Editar = () => {

    const { formulario, cambiado } = useForm()
    const [resultado, setResultado] = useState("")
    const [article, setArticle] = useState({})
    const params = useParams()
    
    useEffect(() => {
        conseguirArticulo()
    }, [params])


    const conseguirArticulo = async() => {
        const { datos } = await Peticion(Global.url+'listar/' + params.id, "GET")

        if(datos.status === "success"){
            setArticle(datos.article)
        } else {
            setArticle('error')
        }
    }

    const editarArticulo = async(e) => {
        e.preventDefault
        
        //recoger datos del formulario
        let nuevoArticulo = formulario
        console.log(nuevoArticulo)

        //guardar articulo en el backend
        try {
            const { datos } = await Peticion(`${Global.url}/actualizar/`+ params.id, "PUT", nuevoArticulo);
            console.log(datos);

            if (datos.status === "success") {
                setResultado("guardado");

                // Subir la imagen
                const fileInput = document.querySelector("#file");

                if (fileInput.files[0]) {
                    const formData = new FormData();
                    formData.append("file", fileInput.files[0]);

                    const subida = await Peticion(`${Global.url}/subir-imagen/` + datos.article._id, "POST", formData, true);

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
            <h1>Editar artículo</h1>
            <p>Formulario para editar: {article.title} </p>
            <strong>{resultado === "guardado" ? "Artículo guardado con éxito" : ""}</strong>
            <strong>{resultado === "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>
            {/*Montar el formulario */}
            <form 
                className="formulario" 
                onSubmit={editarArticulo}
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
                        defaultValue={article.title}
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
                        defaultValue={article.content}
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <label 
                        htmlFor="file"
                    >
                        Imagen
                    </label>
                    <div className="mask">
                        {
                            article.image && article.image !== "default.png" ? (
                                <img src={`${Global.url}/imagen/${article.image}`} alt="imagen" />
                            ) : (
                                <img src="https://via.placeholder.com/300" alt="imagen" />
                            )
                        }
                    </div>
                    <input 
                        type="file" 
                        name="file" 
                        id="file"
                        
                    />
                    
                </div>
                <input 
                    type="submit" 
                    value="Editar" 
                    className="btn btn-success"
                />
            </form>
        </div>
    )
}
