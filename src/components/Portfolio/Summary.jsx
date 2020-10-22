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
    <div className="rounded border-2 p-6 my-3">
      <p class="text-4xl mx-5 my-2">Resumo</p>
      <div class="flex">
        <div class="flex flex-col">
          <div class="px-4 py-2 bg-gray-300">Total investido:</div>
          <div class="px-4 py-2 bg-gray-300">Rendimento mensal:</div>
        </div>
        <div class="flex flex-col">
          <div class="px-4 py-2 ">{Math.floor(calcTotalInvested).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
          <div class="px-4 py-2">{Math.floor(calcTotalRoi).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </div>
        </div>
      </div>
    </div>
  );
}
