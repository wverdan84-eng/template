"use client";
import React, { useState } from 'react';
import { PlusCircle, User } from 'lucide-react';

export default function AdminPage() {
  const [status, setStatus] = useState("");

  const addPoint = () => {
    // Macete: Lógica simples de incremento para teste
    const current = parseInt(localStorage.getItem('fideliza_pts') || "0");
    if (current < 10) {
      localStorage.setItem('fideliza_pts', (current + 1).toString());
      setStatus("✅ Ponto adicionado com sucesso!");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <header className="w-full max-w-md mb-8">
        <h2 className="text-xl font-bold">Painel do Lojista</h2>
        <p className="text-gray-400">Validar selo do cliente</p>
      </header>

      <div className="bg-gray-800 w-full max-w-md rounded-2xl p-6 border border-gray-700">
        <div className="flex items-center gap-4 mb-6 p-4 bg-gray-700 rounded-xl">
          <User className="text-purple-400" />
          <span className="font-mono">ID: CLIENTE-7742</span>
        </div>

        {status && (
          <div className="mb-4 p-3 bg-green-900/30 border border-green-500 text-green-400 rounded-lg text-center animate-bounce">
            {status}
          </div>
        )}

        <button 
          onClick={addPoint}
          className="w-full bg-purple-600 hover:bg-purple-500 h-24 rounded-2xl font-black text-2xl flex items-center justify-center gap-3 transition-transform active:scale-95"
        >
          <PlusCircle size={32} /> DAR SELO
        </button>
      </div>
    </div>
  );
}
