import React from 'react';
import './App.css';
import Forecast from './Components/Forecast/Forecast';
import Logo from './Components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <><Logo /></>
        <h1>Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
    </div>
  );
}

export default App;
