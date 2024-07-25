import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {
	const ficha_medica={
		altura: '165cm',
		grupo: '0',
		estado: 'Bueno',
		alergias: 'Numguna'
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Master Reacts</p>
				<div className='componentes'>
					<TercerComponente 
				
						lastName='Losada' 
						ficha={ficha_medica}
					/>
					<hr/>
					<MiComponente />
					<hr/>
					<SegundoComponente />
				</div>
			</header>
		</div>
	);
}
export default App;
