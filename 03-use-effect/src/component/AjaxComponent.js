import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
    
    const [users, setUsers] = useState([])
    // generico - basico
/* 
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
*/
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
    
    async function getUsersAjaxAW () {
        const peticion = await fetch('https://reqres.in/api/users?page=1');
        const data = await peticion.json()
        console.log(data)
        setUsers(data.data)
    }

    useEffect(() => {
        getUsersAjaxAW()
        //getUsersAjaxPms()
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
