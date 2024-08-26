import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export const Logout = () => {

    const { setAuth, setCounters } = useAuth()
    const Navigate = useNavigate()
  
    useEffect(() => {
        // vaciar al localstorage
        localStorage.clear()

        // setear los estados globales a vacio
        setAuth({})
        setCounters({})

        // redireccionar a la página de login
            Navigate('/login')

    })
    
    return (  
        <h1>Cerrando sesión...</h1>
    )
}
