export const GuardarEnStorage = (clave, elemento) => {

    console.log(clave)
    // conseguir los elementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave))
    // comprobar si es un array
    if (Array.isArray(elementos)) {
        // añadir la nueva pelicula
        elementos.push(elemento)
    } else {
        // si no es un array, crear un array con el nuevo elemento
        elementos = [elemento]
    }
    console.log('elementos',elementos)
    // guardar en el localStorage
    localStorage.setItem(clave , JSON.stringify(elementos))

    // devolver la peli guardada
    return elemento

}