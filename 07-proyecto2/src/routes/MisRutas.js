import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Curriculum } from '../components/Curriculum'
import { Servicios } from '../components/Servicios'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const MisRutas = () => {
    return (
        <BrowserRouter>
            <HeaderNav />
            <section className='content'>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/portafolio" element={<Portafolio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
            </section>
            <hr/>
            <Footer />
        </BrowserRouter>
    )
}
