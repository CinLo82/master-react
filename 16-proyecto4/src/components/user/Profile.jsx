import { useEffect, useState } from 'react';
import { GetProfile } from '../../helpers/GetProfile';
import { useParams } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { Link } from 'react-router-dom';
import avatar from '../../assets/img/user.png';
import { useAuth } from '../../hooks/useAuth';

export const Profile = () => {

    const { auth } = useAuth()
    const [user, setUser] = useState({})
    const params = useParams()
    const [counters, setCounters] = useState({})
    const [iFollow, setIFollow] = useState(false)
    

    useEffect(() => {
        getDataUser()
        getCounters()
    }, [])

    useEffect(() => {
        getDataUser()
        getCounters()
    }, [params])

    const getDataUser = async() => {
        let dataUser = await GetProfile({userId: params.userId, setUserProfile: setUser})
       
        if (dataUser.following && dataUser.following._id) {
            setIFollow(true)
        }
    } 

    const getCounters = async() => {
        const request = await fetch(Global.url + 'user/counters/' + params.userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            method: 'GET'
        })
        const data = await request.json();
        if (data.following !== undefined) {
            setCounters(data);
            console.log('data',data);
        }
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
                setIFollow(true)
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
                setIFollow(false)
            }
        } catch (error) {
            console.error('Error al dejar de seguir al usuario:', error)
        }
    }
  

    return (
        <>
            <section className="layout__content">
                    <header className="aside__profile-info">
                    <div className="profile-info__general-info">
                        <div className="general-info__container-avatar">
                            {user && user.image && user.image !== 'default.png' ? (
                                <img
                                    src={Global.url + 'user/avatar/' + user.image}
                                    className="post__user-image"
                                    alt="Foto de perfil"
                                />
                            ) : (
                                <img src={avatar} className="post__user-image" alt="Foto de perfil" />
                            )}  
                        </div>

                        <div className="general-info__container-names">
                            <div className="container-names__name">
                                <h1>{user.name} {user.surname}</h1> 
                                {
                                    auth._id !== user._id && (
                                        iFollow ?
                                            <button 
                                                className="content__button content__button--right post__button"
                                                onClick={() => unFollow(user._id)}
                                            >
                                                Dejar de Seguir
                                            </button>
                                            :
                                            <button 
                                                className="content__button content__button--right"
                                                onClick={() => follow(user._id)}
                                            >
                                                seguir
                                            </button>
                                    )
                                }
                            </div>
                       
                            <h2 className="container-names__nickname">@{user.nick}</h2>
                            <p>{user.bio}</p>
                            
                        </div>
                    </div>

                    <div className="profile-info__stats">

                        <div className="stats__following">
                            <Link to={'/social/siguiendo/'+user._id} className="following__link">
                                <span className="following__title">Siguiendo</span>
                                <span className="following__number">{counters.following}</span>
                            </Link>
                        </div>
                        <div className="stats__following">
                            <Link to={'/social/seguidores/'+user._id} className="following__link">
                                <span className="following__title">Seguidores</span>
                                <span className="following__number">{counters.followed}</span>
                            </Link>
                        </div>


                        <div className="stats__following">
                            <Link to={'/social/perfil/'+user._id} className="following__link">
                                <span className="following__title">Publicaciones</span>
                                <span className="following__number">{counters.publications}</span>
                            </Link>
                        </div>


                    </div>
                </header>
              
                <div className="content__posts">
                    <article className="posts__post">

                        <div className="post__container">

                            <div className="post__image-user">
                                <a href="#" className="post__image-link">
                                    <img src={avatar} className="post__user-image" alt="Foto de perfil" />
                                </a>
                            </div>

                            <div className="post__body">

                                <div className="post__user-info">
                                    <a href="#" className="user-info__name">Victor Robles</a>
                                    <span className="user-info__divider"> | </span>
                                    <a href="#" className="user-info__create-date">Hace 1 hora</a>
                                </div>

                                <h4 className="post__content">Hola, buenos dias.</h4>

                            </div>
                            </div>
        
                    <div className="post__buttons">

                        <a href="#" className="post__button">
                            <i className="fa-solid fa-trash-can"></i>
                        </a>
                        </div>
                
                </article>

                </div>

                <div className="content__container-btn">
                    <button className="content__btn-more-post">
                        Ver mas publicaciones
                    </button>
                </div>
    
            </section>
        </>
        
    )
}
