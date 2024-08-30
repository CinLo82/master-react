import { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { UserList } from '../user/UserList';
import { useParams } from 'react-router-dom';
import { GetProfile } from '../../helpers/GetProfile';

export const Following = () => {

    const params = useParams()
    const token = localStorage.getItem('token')

    const [users, setUsers] = useState([])
    const [more, setMore] = useState(true)
    const [page, setPage] = useState(1)
    const [following, setFollowing] = useState([])
    const [loading, setLoading] = useState(true)
    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        getUsers(1);
        GetProfile({
            userId: params.userId, 
            setUserProfile
        })
    }, [])

    const getUsers = async (nextPage = 1) => {
        // Sacra userId de la url
        const userId = params.userId

        setLoading(true)
        try {
            const request = await fetch(Global.url + 'follow/following/'+ userId + '/' + nextPage, { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })

            const data = await request.json()
            setLoading(false)

            //Recorrer y limpiar follows para quedarme con followed
            let cleanUsers = []
            data.follows.forEach(follow => {
                cleanUsers = [...cleanUsers, follow.followed]
            })
            data.users = cleanUsers.filter(user => user); 

            // crear un estado para poder listarlos
            if(data.follows && data.status === 'success'){
                let newUsers = data.users
                if(users.length >= 1){
                    newUsers = [...users, ...data.users]
                }

                setUsers(newUsers)
                setFollowing(data.user_following)
                setLoading(false)
            
                // paginacion
                if (users.length + data.follows.length >= data.total) {
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
                    <h1 className="content__title">Usuarios que sigue {userProfile.name} {userProfile.surname} </h1>
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
