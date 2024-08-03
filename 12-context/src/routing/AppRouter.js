import React, { useContext } from 'react'
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Acerca } from '../components/Acerca'
import { Login } from '../components/Login'
import { PruebaContext } from '../context/PruebaContext'

export const AppRouter = () => {

    const {usuario, setUsuario} = useContext(PruebaContext)

    return (
        <BrowserRouter>
            <header className='header'>
                <nav>
                    <ul>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/articulos">Artículos</NavLink></li>
                        <li><NavLink to="/contacto">Contacto</NavLink></li>
                        <li><NavLink to="/acerca">Acerca</NavLink></li>
                        <li>
                            {usuario.nick !== null ? (
                                <>
                                    <li>
                                        <NavLink to="/">{usuario.nick}</NavLink>
                                    </li>
                                    <li>
                                        <a href='#' onClick={ e => {
                                            e.preventDefault()
                                            setUsuario({
                                                nick: null,
                                                nombre: null,
                                                edad: null,
                                                email: null
                                            })
                                        }} >Cerrar Sesion</a>
                                    </li>
                                </>    
                                ) : (
                                    <li>
                                        <NavLink to="/login">Identificate</NavLink>
                                    </li>
                                )
                                
                            }
                        </li>
                    </ul>
                </nav>
            </header>
            <section className='content'>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/articulos" element={<Articulos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/acerca" element={<Acerca />} />
                    <Route path="*" element={<div>
                        <h1>404</h1>
                        <p>Página no encontrada</p>
                    </div>} />
                </Routes>
            </section>
            
        </BrowserRouter>
    )
}
