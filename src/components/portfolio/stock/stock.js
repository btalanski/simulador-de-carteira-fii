import React from 'react';
import CurrencyInput from '../../Form/CurrencyInput';

export default function Stock({ stock, onUpdate }) {
  const onChangeFundName = (e) => {
    onUpdate({
      ...stock,
      fund: e.target.value,
    });
  };

  const onChangeCost = (val) => {
    onUpdate({
      ...stock,
      cost: !!val ? val : 0,
    });
  };

  const addQt = (e) => {
    e.preventDefault();

    onUpdate({
      ...stock,
      qt: (stock.qt += 1),
    });
  };

  const subtractQt = (e) => {
    e.preventDefault();

    if (stock.qt === 0) return;

    let newQt = stock.qt - 1;
    if (newQt < 0) {
      newQt = 0;
    }

    onUpdate({
      ...stock,
      qt: newQt,
    });
  };

  const updateQt = (e) =>
    onUpdate({
      ...stock,
      qt: e.target.value,
    });

  const updateRoi = (e) =>
    onUpdate({
      ...stock,
      roi: e.target.value,
    });

  const calcDividend = () => {
    if (stock.roi > 0 && stock.cost > 0) {
      const dy = (stock.roi / stock.cost) * 100;

      if (!Number.isNaN(dy)) {
        return dy.toFixed(2);
      }
    }

    return 0;
  };
  const calcStockTotal = () => {
    if (stock.qt > 0) {
      return stock.qt * stock.cost;
    }
    return 0;
  };

  return (
    <div class="flex flex-row">
      <div class="flex-1 px-4 py-2">
        <input
          class="w-full p-2 bg-gray-900 text-center"
          type="text"
          value={stock.fund}
          onChange={onChangeFundName}
        />
      </div>
      <div class="flex-1 px-4 py-2 ">
        <CurrencyInput
          className="w-full p-2 bg-gray-900 text-center"
          value={stock.cost}
          onChange={onChangeCost}
        />
      </div>
      <div class="flex flex-1 px-4 py-2 justify-center flex-wrap">
        <button
          class="w-1/4 p-2 bg-gray-900 text-center border-1 text-gray-100"
          onClick={subtractQt}
        >
          -
        </button>
        <input
          class="w-1/2 p-2 bg-gray-900 text-center"
          type="text"
          value={stock.qt}
          onChange={updateQt}
        />
        <button class="w-1/4 p-2 bg-gray-900 text-center" onClick={addQt}>
          +
        </button>
      </div>
      <div class="flex-1 px-4 py-2 ">
        <input
          class="w-full p-2 bg-gray-900 text-center"
          type="text"
          value={stock.roi}
          onChange={updateRoi}
        />
      </div>
      <div class="flex-1 px-4 py-2 ">
        <input
          class="w-full p-2 bg-gray-900 text-center"
          type="text"
          value={calcDividend()}
          readOnly
        />
      </div>
      <div class="flex-1 px-4 py-2">
        <input
          class="w-full p-2 bg-gray-900 text-center"
          type="text"
          value={calcStockTotal()}
          readOnly
        />
      </div>
    </div>
  );
}
