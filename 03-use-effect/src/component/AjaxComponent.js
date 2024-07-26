import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
    
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsersAjaxPms = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then( resp => resp.json())
            .then( data => {
                console.log(data)
                setUsers(data.data)
            },
            error => {
                console.error(error)
            }
        )

    }
    
    const getUsersAjaxAW = () => {
        
        setTimeout(async() => {
            const peticion = await fetch('https://reqres.in/api/users?page=1');
            const data = await peticion.json()
            setUsers(data.data)
            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        getUsersAjaxAW()
        //getUsersAjaxPms()
    },[])

    if(loading === true){
        //cuando esta todo cargando
        return (
            <div className='loading'>
                Cargando datos ...
            </div>
        )
    } else {
        return (
            <div>
                <h1>Listado de usuarios via ajax</h1>
                <ol>
                    {
                        users.map( user => (
                            <li key={user.id}>
                                <img src={user.avatar} alt="avatar" width="20"/>
                                &nbsp;
                                {user.first_name} {user.last_name}
                            </li>
                        ))
                    }
                </ol>
    
            </div>
        )
    }
    


}
