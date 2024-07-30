import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import { Curriculum } from '../components/Curriculum'
import { Servicios } from '../components/Servicios'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'

export const MisRutas = () => {
    return (
        <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/portafolio" element={<Portafolio />} />
                    <Route path="/servicios" component={Servicios} />
                    <Route path="/curriculum" component={Curriculum} />
                    <Route path="/contacto" component={Contacto} />
                </Routes>
        </BrowserRouter>
    )
}
