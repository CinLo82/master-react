import React, { useEffect, useState} from 'react'

export const Empleados = React.memo(

    ({pagina, mensaje}) => {

        const [empleados, setEmpleados] = useState([])

        
        useEffect(()=> {
            console.log('Se ha vuelto a renderizar la vista de gestion')
        },[])


        useEffect(()=> {
            conseguirEmpleados(pagina)
        }, [pagina])

        const conseguirEmpleados = async(p) => {
            const url = 'https://reqres.in/api/users?page='+p
            const respuesta = await fetch(url)
            const {data: empleados} = await respuesta.json()

            setEmpleados(empleados)
            console.log('se ejecuto la peticion')
        }
        mensaje()
    
        return (

            <div>
                <p>Mostrando la pagina: {pagina}</p>
                <ul>
                    {
                        empleados.length >= 1 &&
                            empleados.map((empleado) => (
                                <li key={empleado.id}>
                                    {empleado.first_name} {empleado.last_name}
                                </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
) 