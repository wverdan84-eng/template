"use client";
import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Trophy } from 'lucide-react';

export default function CustomerPage() {
  const [points, setPoints] = useState(0);

  // Macete: Simulando dados do banco (Supabase)
  useEffect(() => {
    const saved = localStorage.getItem('fideliza_pts');
    if (saved) setPoints(parseInt(saved));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-4 flex flex-col items-center">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg border border-purple-100 overflow-hidden">
        <div className="bg-purple-600 p-8 text-center text-white">
          <Trophy className="mx-auto mb-2" size={48} />
          <h1 className="text-2xl font-bold">Café Gold</h1>
          <p className="opacity-80">Seu Cartão Fidelidade</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-5 gap-3 mb-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`h-12 w-12 rounded-xl border-2 flex items-center justify-center transition-all
                ${i < points ? 'bg-green-500 border-green-600 rotate-12' : 'bg-gray-50 border-gray-200'}`}>
                {i < points ? <CheckCircle size={24} color="white" /> : <Star size={20} color="#cbd5e1" />}
              </div>
            ))}
          </div>

          <div className="bg-purple-50 p-4 rounded-2xl text-center">
            <p className="text-purple-900 font-medium">
              Faltam <span className="text-2xl font-black">{10 - points}</span> selos para seu prêmio!
            </p>
          </div>
        </div>
      </div>
      <p className="mt-8 text-gray-400 text-xs">Apresente seu código no balcão</p>
    </div>
  );
}
