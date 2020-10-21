import React from 'react';
import AddFund from './components/AddFund';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="fixed min-w-full flex p-3 bg-gray-900">
        <h1 className="text-gray-100">Simulador de Carteira FII</h1>
      </header>

      <main className="container m-auto pt-16">
      <AddFund />
      </main>
    </div>
  );
}

export default App;
