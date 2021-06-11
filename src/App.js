import Pokedex from './Pokedex';
// import Pokecard from '.Pokecard';
import pokemon from './Pokemon';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Pokedex cards={pokemon} />
		</div>
	);
};

export default App;
