import React from 'react';

export default function PortifolioRow({ stock, onUpdate }) {
  const onChangeFundName = (e) => {
    onUpdate({
      ...stock,
      fund: e.target.value,
    });
  };

  const onChangeCost = (e) => {
    onUpdate({
      ...stock,
      cost: e.target.value,
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

  return (
    <div class="flex flex-row">
      <div class="flex-1 px-4 py-2 ">
        <input
          class="w-full p-2 bg-gray-300"
          type="text"
          value={stock.fund}
          onChange={onChangeFundName}
        />
      </div>
      <div class="flex-1 px-4 py-2 ">
        <input
          class="w-full p-2 bg-gray-300"
          type="text"
          value={stock.cost}
          onChange={onChangeCost}
        />
      </div>
      <div class="flex flex-1 px-4 py-2 min-w-1/4 flex-wrap">
        <input
          class="w-1/4 p-2 bg-gray-300 "
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
          class="w-1/4 p-2 bg-gray-300 "
          type="number"
          value={stock.maxQt}
          onChange={updateMaxQt}
        />
      </div>
      <div class="flex-1 px-4 py-2 ">
        <input
          class="w-full p-2 bg-gray-300"
          type="text"
          value={stock.qt}
          onChange={updateQt}
        />
      </div>
      <div class="flex-1 px-4 py-2 ">
        <input
          class="w-full p-2 bg-gray-300"
          type="text"
          value={stock.roi}
          onChange={updateRoi}
        />
      </div>
      <div class="flex-1 px-4 py-2 ">
        <input class="w-full p-2 bg-gray-300" type="text" value="E" />
      </div>
      <div class="flex-1 px-4 py-2  ">
        <input class="w-full p-2 bg-gray-300" type="text" value={stock.qt * stock.cost} />
      </div>
    </div>
  );
}
