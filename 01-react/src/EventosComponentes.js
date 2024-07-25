import React from 'react'

export const EventosComponentes = () => {
	const handleClick = (e, name) => {
		alert('Click en el boton '+ name)
		console.log(e)
	}

	const handleOnDouble = (e) => {
		alert('haz dado doble click')
	}

	const hasEntrado = (e, accion) => {
		console.log(`Haz ${accion} a la caja con el mouse`)
	}

	const handleIn = (e) => {
		console.log('Haz hecho focus en el input')	
	}

	const handleOut = () => {
		console.log('Haz hecho blur en el input')	
	}

	return (
		<div>
			<h1>Eventos en componentes</h1>
			{/* Evento click */}
			<p>
				<button onClick={ e => handleClick(e, 'Cinlo')}>
				Dame click
				</button>
			</p>
			

			{/* Evento click */}
			<p>
				<button onDoubleClick={handleOnDouble}>
				Dame doble click
			</button>
			</p>
			
			{/* Evento onMouseEnter onMauseLeave */}
			<div 
				id="caja" 
				onMouseEnter={e => hasEntrado(e, 'entrado')}
				onMouseLeave={e => hasEntrado(e, 'salido')}
			>
				pasa por encima 
			</div>

			<p>
				<input 
					type='text' 
					onFocus={handleIn} 
					placeholder='Introduce tu nombre'
					onBlur={handleOut}
				/>
			</p>

		</div>
	)
}

