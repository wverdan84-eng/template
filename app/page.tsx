"use client";
import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, DollarSign, Clock, CheckCircle2 } from 'lucide-react';

export default function HighTicketROI() {
  const [val, setVal] = useState(5000); // Investimento
  const roi = val * 3.5; // Simulação de retorno de 3.5x

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans p-6 selection:bg-emerald-500">
      {/* Header Lucrativo */}
      <header className="max-w-4xl mx-auto flex justify-between items-center py-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <TrendingUp size={20} className="text-black" />
          </div>
          <span className="font-black text-xl tracking-tighter italic">ROI_PRO</span>
        </div>
        <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 text-xs font-bold text-emerald-500 animate-pulse">
          PROPOSTA ATIVA
        </div>
      </header>

      <main className="max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-3xl shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Transforme <span className="text-emerald-500">R$ {val.toLocaleString()}</span> em <br />
          <span className="underline decoration-emerald-500/30">R$ {roi.toLocaleString()}</span> de lucro.
        </h1>
        
        <p className="text-zinc-400 text-lg mb-12 max-w-xl">
          Esta é uma análise estratégica personalizada para o seu negócio crescer com previsibilidade.
        </p>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { t: "Garantia de Entrega", i: ShieldCheck },
            { t: "Suporte Prioritário 24/7", i: Clock },
            { t: "Estratégia Anti-Risco", i: DollarSign },
            { t: "Relatórios em Tempo Real", i: CheckCircle2 },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-black/40 rounded-2xl border border-zinc-800/50">
              <item.i className="text-emerald-500" size={24} />
              <span className="font-bold text-zinc-200">{item.t}</span>
            </div>
          ))}
        </div>

        {/* CTA - O Botão que Faz Dinheiro */}
        <div className="flex flex-col items-center gap-6 border-t border-zinc-800 pt-12">
          <div className="text-center">
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2 font-bold">Investimento Total</p>
            <p className="text-5xl font-black text-white">R$ {val.toLocaleString()}</p>
          </div>
          
          <button className="w-full max-w-md bg-emerald-500 hover:bg-emerald-400 text-black py-6 rounded-2xl font-black text-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-95">
            ACEITAR PROPOSTA E COMEÇAR
          </button>
          
          <p className="text-zinc-600 text-xs italic italic">Link válido por apenas 24 horas.</p>
        </div>
      </main>
    </div>
  );
}
