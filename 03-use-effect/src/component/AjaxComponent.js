import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
    
    const [users, setUsers] = useState([])
    // generico - basico

    const getUsersStatic = () => {
        setUsers([
            {
                "id": 1,
                "email": "cinlo@reqres.in",
                "first_name": "Cinlo",
                "last_name": "Losada",
            },
            {
                "id": 2,
                "email": "julian@reqres.in",
                "first_name": "Julian",
                "last_name": "Garcia",
            },
            {
                "id": 3,
                "email": "lucia@reqres.in",
                "first_name": "Lucia",
                "last_name": "Perez",
            },
        ])
    }

    useEffect(() => {
        getUsersStatic()
    },[])


    return (
        <div>
            <h1>Listado de usuarios via ajax</h1>
            <ol>
                {
                    users.map( user => (
                        <li key={user.id}>
                            {user.first_name} {user.last_name}
                        </li>
                    ))
                }
            </ol>

        </div>
    )
}
