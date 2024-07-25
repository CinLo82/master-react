import React from 'react'

export const SegundoComponente = () => {
    const books = ['Harry Potter', 'Juego de tronos', 'Clean Code']
//    const books = []

    return (
        <div>
            <h1>SegundoComponente</h1>
            { books.length >= 1 ? 
                (<ul>
                    {
                        books.map((book, index) => (
                        <li key={index}>{book}</li>
                        ))
                    }
                </ul>)
            : 
            (<p>Ni hay Libros</p>)
            }    
        </div>
    )
}

