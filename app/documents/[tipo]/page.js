"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Documento() {
  const { tipo } = useParams();
  const [nome, setNome] = useState("");
  const [conteudo, setConteudo] = useState("");

  function gerar() {
    setConteudo(`Documento do tipo: ${tipo}

Nome: ${nome}

Texto será gerado aqui.`);
  }

  return (
    <main style={{ padding: 40, maxWidth: 600 }}>
      <h1>{tipo.toUpperCase()}</h1>

      <input
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button onClick={gerar}>Gerar documento</button>

      {conteudo && (
        <textarea rows={6} value={conteudo} readOnly />
      )}
    </main>
  );
                   }
