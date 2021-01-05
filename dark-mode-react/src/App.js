import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false)  

    useEffect(() => {
			const json = localStorage.getItem("site-dark-mode");
			const currentMode = JSON.parse(json);
			if (currentMode) {
				setDarkMode(true);
			} else {
				setDarkMode(false);
			}
		}, []);

		useEffect(() => {
			if (darkMode) {
				document.body.classList.add("dark");
			} else {
				document.body.classList.remove("dark");
			}
			const json = JSON.stringify(darkMode);
			localStorage.setItem("site-dark-mode", json);
		}, [darkMode]);
    
  return (
		<div className='App'>
			<h1>Welcome to the {darkMode? 'dark side' : 'light side' }</h1>
			<button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
		</div>
	);
}

export default App;
