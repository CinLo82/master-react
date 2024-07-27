import React from 'react'

export const Buscador = () => {
    return (
        <>
            <div className="search">
                <h3 className="title">Buscador</h3>
                <input type="text" name="search" id="search_field" placeholder="Buscar..." />
                <button id="search">Buscar</button>
            </div>
        </>
    )
}
