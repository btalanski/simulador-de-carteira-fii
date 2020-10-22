import React from 'react';
import { initialState } from './state';
import PortifolioRow from './PortifolioRow';
import Summary from './Summary';
export default function Portfolio() {
  const [stocks, setStocks] = React.useState(initialState);

  const onUpdateStock = (stock) => {
    console.log(stock);
    const updatedStocks = [...stocks];
    const stockIndex = stocks.findIndex(({ id }) => id === stock.id);

    updatedStocks[stockIndex] = stock;
    setStocks(updatedStocks);
  };

  const addStock = (e) => {
    e.preventDefault();
    const newStock = {
      fund: '',
      cost: 0,
      roi: 0,
      minQt: 0,
      maxQt: 100,
      qt: 0,
    };
    newStock.id = stocks.length + 1;
    setStocks([...stocks, newStock]);
  };

  return (
    <div class="container">
      <div className="rounded border-2 p-6">
        <p class="text-4xl mx-5 my-2">Carteira</p>
        <form class="flex flex-col">
          <div class="flex flex-row row header">
            <div class="flex-1 text-center">Fundo</div>
            <div class="flex-1 text-center">Custo</div>
            <div class="flex-1 min-w-1/4 text-center">Cotas</div>
            <div class="flex-1 min-w-1/4 text-center">Qt. cotas</div>
            <div class="flex-1 text-center">Rendimento</div>
            <div class="flex-1 text-center">D/Y</div>
            <div class="flex-1 text-center">Total</div>
          </div>
          {stocks.map((stock) => (
            <PortifolioRow stock={stock} onUpdate={onUpdateStock} />
          ))}
          <button onClick={addStock}>Adicionar fundo</button>
        </form>
      </div>
      <Summary stocks={stocks} />
    </div>
  );
}
