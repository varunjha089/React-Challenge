import logo from './logo.svg';
import './App.css';
import Info from './info.js'

function App() {
	return (
		<div className="App">
			<Info />
			<AddItem />
		</div>
	);
}

function AddItem() {
	const value = "Varun is Awesome";
	return (
		<form>
			<label for="text-form">Type Something: </label>
			<input type="text" id="text-form" value={value}  />
		</form>
	);
}

export default App;
