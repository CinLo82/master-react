import React from 'react'
import { NavLink, Routes, Route, BrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { Persona } from '../components/Persona'
import { PanelControl } from '../components/PanelControl'
import { InicioPanel } from '../components/panel/InicioPanel'
import { Crear } from '../components/panel/Crear'
import { Gestionar } from '../components/panel/Gestionar'
import { Acerca } from '../components/panel/Acerca'

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <h1>Cabecera</h1>
            <hr />
            <h2>Menú</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/"
                            className={({isActive}) => isActive ? 'activado' : ''}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/articulos" 
                            className={({isActive}) => isActive ? 'activado' : ''}
                        >
                            Articulos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contacto" 
                            className={({isActive}) => isActive ? 'activado' : ''}
                        >
                            Contacto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/panel" 
                            className={({isActive}) => isActive ? 'activado' : ''}
                        >
                            Panel Control
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <hr />
            <section className='contenido-principal'>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/articulos" element={<Articulos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/persona/:nombre/:apellido" element={<Persona />} />
                    <Route path="/persona/:nombre" element={<Persona />} /> 
                    <Route path="/persona" element={<Persona />} />
                    <Route path="/redirigir" element={<Navigate to="/persona/cinlo/losada"/>} />
                    <Route path="/panel/*" element={<PanelControl />} >
                        <Route path="inicio" element={<InicioPanel />} />
                        <Route path="crear-articulos" element={<Crear />} />
                        <Route path="gestion-usuarios" element={<Gestionar />} />
                        <Route path="acerca-de" element={<Acerca />} />
                    </Route>
                    <Route path="*" element={<Error />}/>
                </Routes>
            </section>
            <hr />
            <footer>
                <p>Pie de página</p>
            </footer>
            
        </BrowserRouter>
    
    )
}
