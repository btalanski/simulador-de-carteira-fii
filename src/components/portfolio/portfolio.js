import React from 'react';
import { initialState } from './state';
import { Stock } from './stock';
import Summary from './Summary';

const header = ['Fundo', 'Custo', 'Cotas', 'Rendimento', 'D/Y %', 'Total'];

export default function Portfolio() {
  const [stocks, setStocks] = React.useState(initialState);

  const onUpdateStock = (stock) => {
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
    <div class="container rounded border-2 p-6 border-gray-700">
      <p class="text-4xl mx-5 my-2">Carteira</p>
      <div class="flex flex-col">
        <div class="flex flex-row row header">
          {header.map((item) => (
            <div class="flex-1 text-center">{item}</div>
          ))}
        </div>

        {stocks.map((stock) => (
          <Stock stock={stock} onUpdate={onUpdateStock} />
        ))}

        <button
          class="rounded-sm bg-gray-700 p-5 m-4 text-gray-100"
          onClick={addStock}
        >
          Adicionar fundo
        </button>
      </div>
      <Summary stocks={stocks} />
    </div>
  );
}
