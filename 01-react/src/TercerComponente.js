import React from 'react';
import Propstypes from 'prop-types'

export const TercerComponente = ({name, lastName, ficha}) => {
    
    return (
        <div>
            <p>Comunicación entre componentes</p>
            <ul>
                <li>{name}</li>
                <li>{lastName}</li>
                <li>{ficha.estado}</li>

            </ul>
        </div>
    )
}

TercerComponente.propTypes = {
    name: Propstypes.string.isRequired,
    lastName: Propstypes.string.isRequired,
    ficha: Propstypes.object.isRequired
}