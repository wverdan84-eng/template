"use client";
import React from 'react';
import { Instagram, Linkedin, Github, Twitter, Globe, Share2 } from 'lucide-react';

export default function BioPremium() {
  const links = [
    { name: "Instagram", url: "#", icon: Instagram, color: "bg-pink-500" },
    { name: "LinkedIn", url: "#", icon: Linkedin, color: "bg-blue-600" },
    { name: "Twitter / X", url: "#", icon: Twitter, color: "bg-zinc-800" },
    { name: "Meu Portfolio", url: "#", icon: Globe, color: "bg-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center p-6 font-sans selection:bg-blue-500">
      {/* Círculos de Luz de Fundo (Aura) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full" />

      {/* Header Profissional */}
      <div className="relative mt-12 mb-8 flex flex-col items-center">
        <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/20">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="Avatar" 
            className="w-full h-full rounded-full bg-zinc-900 border-4 border-black"
          />
        </div>
        <h1 className="mt-4 text-2xl font-black tracking-tight">Washington Verdan</h1>
        <p className="text-zinc-400 font-medium">Full Stack Developer & Tech Enthusiast</p>
      </div>

      {/* Grid de Links Estilo Apple */}
      <main className="w-full max-w-[400px] z-10 space-y-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            className="group flex items-center p-4 bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl rounded-2xl hover:scale-[1.02] hover:bg-zinc-800/80 transition-all duration-300 shadow-lg"
          >
            <div className={`${link.color} p-3 rounded-xl shadow-lg group-hover:rotate-12 transition-transform`}>
              <link.icon size={20} color="white" />
            </div>
            <span className="ml-4 font-bold text-lg">{link.name}</span>
            <Share2 size={16} className="ml-auto text-zinc-600 group-hover:text-blue-400" />
          </a>
        ))}
      </main>

      {/* Rodapé Viral */}
      <footer className="mt-auto py-8 text-zinc-500 text-xs flex flex-col items-center gap-4">
        <button className="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full border border-white/10 transition-colors">
          Obter uma página como esta 🚀
        </button>
        <p>© 2026 • Built with Gemini</p>
      </footer>
    </div>
  );
}
