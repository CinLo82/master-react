
export const Peticion = async(url, metodo, datosGuardar) => {
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
        opciones = {
            method: metodo,
            body: JSON.stringify(datosGuardar),
            headers: {
                "Content-Type": "application/json"
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