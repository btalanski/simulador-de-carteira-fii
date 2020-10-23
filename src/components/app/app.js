import React from 'react';
import { Portfolio } from '../portfolio';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="fixed min-w-full flex p-3 bg-gray-900 shadow-2xl">
        <h1 className="text-gray-100"> Simulador de Carteira FII </h1>
      </header>
      <main className="container m-auto pt-16">
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
