import { useState } from 'react'
import { useAjax } from '../hook/useAjax'

export const MiUsuario = () => {

    const [url, setUrl] = useState('https://reqres.in/api/users/1')
    const {datos, loading} = useAjax(url)

    const getId = e => {
        let id = parseInt(e.target.value)
        setUrl('https://reqres.in/api/users/'+id)
    }

    return (
        <div>
            <h1>Mi estado</h1>
            <p>Información de mi estado</p>
            <p>{loading ? 'Cargando...' : ''}</p>
            <p>{datos?.first_name} {datos?.last_name}</p>
            <input type='number' name="id" onChange={getId} />
        </div>
    )
}
