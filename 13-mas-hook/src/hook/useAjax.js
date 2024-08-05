import { useEffect, useState } from "react";

export const useAjax = (url) => {
    const [estado, setEstado] = useState({
        datos: null,
        loading: true    
    });

    const getEstado = async() => {

        setEstado({
            ...estado, 
            loading: true
        })

        const resp = await fetch(url)
        const {data} = await resp.json()

        setEstado({
            datos: data, 
            loading: false
        })
    }

    useEffect(() => {
        getEstado('https://reqres.in/api/users/1')
    }, [url])

    return {
        datos: estado.datos,
        loading: estado.loading,
    }
}