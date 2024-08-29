import { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { UserList } from '../user/UserList';
import { useParams } from 'react-router-dom';

export const Followers = () => {

    const params = useParams()

    const [users, setUsers] = useState([])
    const [more, setMore] = useState(true)
    const [page, setPage] = useState(1)
    const [following, setFollowing] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUsers(1);
    }, [])

    const getUsers = async (nextPage = 1) => {
        // Sacra userId de la url
        const userId = params.userId

        setLoading(true)
        const token = localStorage.getItem('token')

        try {
            const request = await fetch(Global.url + 'follow/followers/' + userId + '/' + nextPage, { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            });

            const data = await request.json();
            setLoading(false);

            if (data.user_follow_me && data.status === 'success') {
                 // Recorrer y limpiar user_follow_me para quedarme con los IDs
                 let userIds = data.user_follow_me;
 
                // Hacer una solicitud adicional para obtener los detalles completos de cada usuario
                const userDetailsPromises = userIds.map(id => 
                     fetch(Global.url + 'user/profile/' + id, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                        }
                    }).then(response => response.json())
                );
 
                const userDetails = await Promise.all(userDetailsPromises);
 
                // Crear un estado para poder listarlos
                let newUsers = userDetails.map(detail => detail.userProfile);
                if (users.length >= 1) {
                    newUsers = [...users, ...userDetails.map(detail => detail.userProfile)];
                }

                // Filtrar usuarios duplicados
                const uniqueUsers = Array.from(new Set(newUsers.map(user => user._id)))
                                        .map(id => newUsers.find(user => user._id === id));

                setUsers(uniqueUsers);
                setFollowing(data.user_following || []);
                setLoading(false);

                // Paginación
                if (uniqueUsers.length >= data.total) {
                    setMore(false);
                }
            } else {
                setMore(false);
            }
        } catch (error) {
            console.error('Error al obtener los usuarios:', error)
        }
    }

    return (
        <>
            <section className="layout__content">
                <header className="content__header">
                    <h1 className="content__title">Seguidores de Alexia!</h1>
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
