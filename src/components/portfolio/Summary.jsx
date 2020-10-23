import React from 'react';

export default function Summary({ stocks }) {
  const calcTotalInvested = stocks.reduce((total, stock) => {
    const stockTotal = stock.cost * stock.qt;
    return (total += stockTotal);
  }, 0);

  const calcTotalRoi = stocks.reduce((total, stock) => {
    const stockTotal = stock.qt * stock.roi;
    return (total += stockTotal);
  }, 0);
  return (
    <div className="rounded border-2 p-6 m-3 border-gray-700">
      <p class="text-4xl m-0">Resumo</p>
      <div class="flex">
        <div class="flex flex-col">
          <div class="px-4 py-2 bg-gray-900 my-1">Total investido:</div>
          <div class="px-4 py-2 bg-gray-900 ">Rendimento mensal:</div>
        </div>
        <div class="flex flex-col">
          <div class="px-4 py-2 my-1">{Math.floor(calcTotalInvested).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
          <div class="px-4 py-2 ">{Math.floor(calcTotalRoi).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </div>
        </div>
      </div>
    </div>
  );
}
