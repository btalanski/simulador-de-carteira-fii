import React from 'react';
import CurrencyInput from "../Form/CurrencyInput";

export default function PortifolioRow({ stock, onUpdate }) {
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

  const updateMinQt = (e) =>
    onUpdate({
      ...stock,
      minQt: e.target.value,
    });

  const updateMaxQt = (e) =>
    onUpdate({
      ...stock,
      maxQt: e.target.value,
    });

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
      <div class="flex flex-1 px-4 py-2 min-w-1/4 flex-wrap">
        <input
          class="w-1/4 p-2 bg-gray-900 text-center"
          type="number"
          value={stock.minQt}
          onChange={updateMinQt}
        />
        <input
          class="w-1/2"
          type="range"
          min={stock.minQt}
          max={stock.maxQt}
          value={stock.qt}
          onChange={updateQt}
        />
        <input
          class="w-1/4 p-2 bg-gray-900 text-center"
          type="number"
          value={stock.maxQt}
          onChange={updateMaxQt}
        />
      </div>
      <div class="flex-1 px-4 py-2 ">
        <input
          class="w-full p-2 bg-gray-900 text-center"
          type="text"
          value={stock.qt}
          onChange={updateQt}
        />
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
