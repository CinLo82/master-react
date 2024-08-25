import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const PrivateLayout = () => {
    return (
        <>
            {/* Layout */}
            <Header />

            {/* Contenido principal */}
            <section className="layout__content">
                <Outlet />
            </section>
        </>
    )
}
