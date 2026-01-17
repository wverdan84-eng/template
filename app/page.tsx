"use client";
import React from 'react';
import { CreditCard, Gift, ArrowUpRight, Zap } from 'lucide-react';

export default function CustomerWallet() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-5">
      {/* Header Estilo Apple */}
      <header className="flex justify-between items-center py-6">
        <h1 className="text-xl font-medium tracking-tight">Retenção<span className="text-blue-500">Total</span></h1>
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
          <Zap size={20} fill="white" />
        </div>
      </header>

      {/* Card de Cashback */}
      <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[2rem] p-8 border border-zinc-700 shadow-2xl mb-6">
        <p className="text-zinc-400 text-sm mb-1 uppercase tracking-widest font-bold">Saldo Acumulado</p>
        <h2 className="text-5xl font-black mb-4">R$ 45,90</h2>
        <div className="flex gap-2">
          <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <ArrowUpRight size={14} /> +12% esse mês
          </span>
        </div>
      </div>

      {/* Progressão de Nível */}
      <div className="bg-zinc-900 rounded-[1.5rem] p-6 border border-zinc-800 mb-6">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="font-bold text-lg leading-tight">Cliente VIP Prata</h3>
            <p className="text-zinc-500 text-sm">Faltam 3 visitas para o Nível Ouro</p>
          </div>
          <Gift className="text-blue-500" size={28} />
        </div>
        <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full w-[70%] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </div>
      </div>

      <button className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg hover:bg-zinc-200 transition-all active:scale-95">
        RESGATAR BENEFÍCIO
      </button>
    </div>
  );
}
