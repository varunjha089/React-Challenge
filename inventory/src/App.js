import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<Info />
			<AddItem />
		</div>
	);
}

function Info() {
	const title = "This is the title of Applicaton";
	const showTitle = true;

	return (
		<div>
			<h1>{title ? showTitle : ""}</h1>
			<p>Manage your stuff.</p>
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
