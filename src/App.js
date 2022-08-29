import React  from 'react';
import './App.css';
import Links from './Links';


function App() {
  return (
    <div className="App">
      <div className='tittle'>
        <p>..</p>
      </div>
      <header className="App-header">
        <div>
        <h1>Primer proyecto de Rutas</h1>
        </div>
        <div className='paragraph'>
          <Links />
        </div>
      </header>
    </div>
  );
}

export default App;
