import React from 'react';

export default function AddFund(){
    return(
        <div className="container">
            <p class="text-lg font-bold mb-2">Utilize o formulário abaixo para adicionar um fundo a sua carteira</p>
            <div className="rounded border-2 p-6">
            <form class="flex flex-col space-y-4">
                <div class="flex">
                    <div class="space-y-2">
                        <label>Código do fundo</label>
                        <input type="text" className="border-2" />
                    </div>
                    <div class="space-y-2">
                        <label>Quantidade de cotas</label>
                        <input type="number" className="border-2" />
                    </div>
                    <div class="space-y-2">
                        <label>Valor médio por cota</label>
                        <input type="number" className="border-2" />
                    </div>
                    <div class="space-y-2">
                        <label>Dividendo médio por cota</label>
                        <input type="number"  className="border-2"/>
                    </div>
                </div>
                <div className="flex">
                    <button class="border-2 rounded-lg bg-gray-900 text-gray-200 p-2">
                        Adicionar a carteira
                    </button>
                </div>
            </form>
        </div>
        </div>
        
    );
}