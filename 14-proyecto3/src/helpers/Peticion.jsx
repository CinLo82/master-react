
export const Peticion = async(url, metodo, datosGuardar = "", archivos = false) => {
    let loading = true

    let opciones = {
        method: "GET"
    }

    if(metodo === 'GET' || metodo === 'DELETE'){
        opciones = {
            method: metodo
        }
    }

    if(metodo === 'POST' || metodo === 'PUT'){

        if(archivos){
            opciones = {
                method: metodo,
                body: datosGuardar
            }
        } else {
            opciones = {
                method: metodo,
                body: JSON.stringify(datosGuardar),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        }

    }

    const resp = await fetch(url, opciones)
    const datos = await resp.json()

    loading = false

    return {
        datos,
        loading
    }

}