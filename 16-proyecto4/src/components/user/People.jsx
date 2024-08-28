import { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { UserList } from './UserList';

export const People = () => {

    const [users, setUsers] = useState([])
    const [more, setMore] = useState(true)
    const [page, setPage] = useState(1)
    const [following, setFollowing] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            getUsers(1);
    }, [])

    const getUsers = async (nextPage = 1) => {

        setLoading(true)
        const token = localStorage.getItem('token')

        try {
            const request = await fetch(Global.url + 'user/list/'+ nextPage, { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })

            const data = await request.json()
            setLoading(false)

            // crear un estado para poder listarlos
            if(data.users && data.status === 'success'){
                let newUsers = data.users

                if(users.length >= 1){
                    newUsers = [...users, ...data.users]
                }

                setUsers(newUsers)
                setFollowing(data.user_following)
                setLoading(false)
            
                // paginacion
                if (users.length + data.users.length >= data.total) {
                setMore(false)
                }
            }
        } catch (error) {
            console.error('Error al obtener los usuarios:', error)
        }
   
    }

    return (
        <>
            <section className="layout__content">
                <header className="content__header">
                    <h1 className="content__title">Gente</h1>
                </header>
                <UserList 
                    users={users}
                    getUsers={getUsers}
                    following={following}
                    setFollowing={setFollowing}
                    more={more}
                    loading={loading}
                    page={page}
                    setPage={setPage}
                />
       
            </section>
        </>
    )
}
