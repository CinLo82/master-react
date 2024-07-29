export const GuardarEnStorage = (clave, elemento) => {

    // conseguir los elementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem('clave')) || []
    console.log(elementos)
    // comprobar si es un array
    if (Array.isArray(clave)) {
        // añadir la nueva pelicula
        elementos.push(elemento)
    } else {
        // si no es un array, crear un array con la nueva elementocula
        elementos = [elemento]
    }
    // guardar en el localStorage
    localStorage.setItem('pelis', JSON.stringify(elementos))

    // devolver la peli guardada
    return elemento

}