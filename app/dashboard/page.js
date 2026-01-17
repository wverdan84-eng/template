"use client";

import { useState } from "react";

export default function Dashboard() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");
  const [pedido, setPedido] = useState("");
  const [resultado, setResultado] = useState("");

  function gerarDocumento() {
    const texto = `Eu, ${nome}, portador(a) do CPF ${cpf}, ocupante do cargo ${cargo}, venho por meio deste requerer ${pedido}.

Nestes termos,
Pede deferimento.`;

    setResultado(texto);
  }

  return (
    <main style={{ padding: 40, maxWidth: 600 }}>
      <h1>DocPronto BR</h1>
      <p>Gerador de Requerimento Administrativo</p>

      <input
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <input
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />

      <textarea
        placeholder="Descreva seu pedido"
        value={pedido}
        onChange={(e) => setPedido(e.target.value)}
      />

      <button onClick={gerarDocumento}>
        Gerar documento
      </button>

      {resultado && (
        <>
          <h3>Documento gerado:</h3>
          <textarea value={resultado} readOnly rows={6} />
        </>
      )}
    </main>
  );
}