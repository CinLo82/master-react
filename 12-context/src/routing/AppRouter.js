import React from 'react'
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Acerca } from '../components/Acerca'
import { Login } from '../components/Login'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <header className='header'>
                <nav>
                    <ul>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/articulos">Artículos</NavLink></li>
                        <li><NavLink to="/contacto">Contacto</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/acerca">Acerca</NavLink></li>
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
