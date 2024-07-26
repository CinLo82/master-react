import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const EjercicioComponent = ({year}) => {

    const [yearNow, setYearNow] = useState(year)

    const siguiente = () => {
        setYearNow(yearNow + 1)
    }

    const anterior = () => {
        setYearNow(yearNow - 1)
    }

    const changeYear = (e) => {
        let valor= parseInt(e.target.value)

        if(Number.isInteger(valor)){
            setYearNow(valor)
        } else {
            setYearNow(year)
        }
    }


    return (
        <div>
            <h2>Ejercicio con evento y useState</h2>
            <strong className='label-green'>{yearNow}</strong>
            <p>
            
                <button className='buttonYears' onClick={anterior}>ANTERIOR</button>
                &nbsp;
                <button className='buttonYears' onClick={siguiente}>SIGUIENTE</button>
            </p>
            <p>
                <input 
                    className='inputYears'
                    type='text' 
                    placeholder='Cambia el año'
                    onChange={changeYear}
                />
            </p>
            
        </div>
    )
}

EjercicioComponent.propTypes = {   
    year: PropTypes.number.isRequired
}

