import {Link} from 'react-router-dom'

export const Inicio = () => {
    return (
        <div className='jumbo'>
            <h1>Bienvenidos al blog con React</h1>
            <p>Este es un blog hecho con MERN Stack (Mongo, Express, React y NodeJS)</p>
            <Link to="/articulos" className='button'>Ver los articulos</Link>
        </div>
    )
}
