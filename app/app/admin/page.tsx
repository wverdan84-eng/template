"use client";
import React from 'react';
import { Users, ScanLine, DollarSign, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: "Vendas Retidas", val: "R$ 12.400", icon: DollarSign, color: "text-green-400" },
    { label: "Clientes Ativos", val: "482", icon: Users, color: "text-blue-400" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-black text-zinc-900 mb-8 tracking-tight">Painel de Controle</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-zinc-200">
            <s.icon className={`${s.color} mb-2`} size={24} />
            <p className="text-zinc-500 text-xs font-bold uppercase">{s.label}</p>
            <p className="text-2xl font-black text-zinc-900">{s.val}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-zinc-100 text-center">
        <div className="w-24 h-24 bg-blue-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-blue-200">
          <ScanLine color="white" size={48} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Novo Registro</h2>
        <p className="text-zinc-500 mb-8">Escaneie o QR Code do cliente para dar pontos ou cashback na hora.</p>
        <button className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all">
          ABRIR CÂMERA
        </button>
      </div>
    </div>
  );
}
