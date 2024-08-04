export const useMayus = (texto) => {

    const mayusculas = () => {
        return texto.toUpperCase()
    }

    const minusculas = () => {
        return texto.toLowerCase()
    }

    const concatenar = (added) => {
        return texto + ' ' + added
    }

    return {
        mayusculas,
        minusculas,
        concatenar
    }
}