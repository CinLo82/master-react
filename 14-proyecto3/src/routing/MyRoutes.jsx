import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Articulos } from "../components/pages/Articulos"
import { Crear } from "../components/pages/Crear"
import { Inicio } from "../components/pages/Inicio"
import { Nav } from "../components/layout/Nav"
import { Header } from "../components/layout/Header"
import { Sidebar } from "../components/layout/Sidebar"
import { Footer } from "../components/layout/Footer"

export const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                {/*Layout */}
                <Header />
                <Nav />
                  {/*Content  */}
                <section id="content" className="content">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/inicio" element={<Inicio />} />
                        <Route path="/articulos" element={<Articulos />} />
                        <Route path="/crear-articulos" element={<Crear />} />
                    </Routes>
                </section>
                <Sidebar />
                <Footer />
            </BrowserRouter> 
        </>
    )
}