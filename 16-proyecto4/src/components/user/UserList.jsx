import { Global } from '../../helpers/Global';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import avatar from '../../assets/img/user.png';
import PropTypes from 'prop-types';

export const UserList = ({ users, getUsers, following, setFollowing, more, loading, page, setPage }) => {

    const { auth } = useAuth()

    const nextPage = async () => {

        let next = page + 1
        setPage(next)
        getUsers(next)
    }

    const follow = async (userId) => {
        try {
            const request = await fetch(Global.url + 'follow/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify({followed: userId})
            })

            const data = await request.json()

            if(data.status === 'success'){
                setFollowing([...following, userId])
            }
        } catch (error) {
            console.error('Error al seguir al usuario:', error)
        }
    }

    const unFollow = async (userId) => {
         try {
            const request = await fetch(Global.url + 'follow/unfollow/' + userId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify({followed: userId})
            })

            const data = await request.json()

            if(data.status === 'success'){
                let filterFollowings = following.filter((follow) => follow !== userId)
                setFollowing(filterFollowings)
            }
        } catch (error) {
            console.error('Error al dejar de seguir al usuario:', error)
        }
    }
  

    return (
        <>
            <div className="content__posts">                
            {
                users.map((user) => {
                    if (!user) return null
                    
                    return(
                        <article className="posts__post" key={user._id}>

                            <div className="post__container">

                                <div className="post__image-user">
                                    <Link to={'/social/perfil'+ user._id} className="post__image-link">
                                    {user && user.image && user.image !== 'default.png' ? (
                                            <img
                                                src={Global.url + 'user/avatar/' + user.image}
                                                className="post__user-image"
                                                alt="Foto de perfil"
                                            />
                                        ) : (
                                            <img src={avatar} className="post__user-image" alt="Foto de perfil" />
                                        )}
                                    </Link>
                                </div>
                                <div className="post__body">
                                    <div className="post__user-info">
                                        <Link to={'/social/perfil/'+user._id}  className="user-info__name">{user.name} {user.surname}</Link>
                                        <span className="user-info__divider"> | </span>
                                        <Link to={'/social/perfil/'+user._id}  className="user-info__create-date">{user.created_at
                                        }</Link>
                                    </div>
                                    <h4 className="post__content">{user.bio}</h4>
                                </div>
                            </div>
                            {user._id !== auth._id && 
                                <div className="post__buttons">
                                    {
                                        !following.includes(user._id) && (
                                            <button
                                                className="post__button post__button--green"
                                                onClick={() => follow(user._id)}
                                            >
                                                Seguir
                                            </button>
                                        )
                                    }
                                    {
                                        following.includes(user._id) && (
                                            <button 
                                                className="post__button post__button--red"
                                                onClick={() => unFollow(user._id)}
                                            >
                                                Dejar de seguir
                                            </button>
                                        )
                                    }
                                    
                                </div>
                            }
                        </article>
                    )
                })
            }
        
        </div>
        { loading ? <div>Cargando...</div> : '' }
        {
            more && (
                <div className="content__container-btn">
                    <button className="content__btn-more-post" onClick={nextPage}>
                        Ver mas publicaciones
                    </button>
                </div>
            )
        }
        < br />
    </>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    getUsers: PropTypes.func.isRequired,
    following: PropTypes.arrayOf(PropTypes.string).isRequired,
    setFollowing: PropTypes.func.isRequired,
    more: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired
};