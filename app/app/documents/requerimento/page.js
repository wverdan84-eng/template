"use client";

import { useState } from "react";

export default function Requerimento() {
  const [orgao, setOrgao] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");
  const [pedido, setPedido] = useState("");
  const [resultado, setResultado] = useState("");

  function gerarDocumento() {
    const texto = `
AO ${orgao.toUpperCase()}

Eu, ${nome}, inscrito(a) no CPF nº ${cpf}, ocupante do cargo de ${cargo},
venho respeitosamente à presença de Vossa Senhoria requerer:

${pedido}

Nestes termos,
Pede deferimento.

_________________________________
${nome}
    `;

    setResultado(texto.trim());
  }

  return (
    <main style={{ padding: 40, maxWidth: 600 }}>
      <h1>Requerimento Administrativo</h1>

      <input
        placeholder="Órgão / Setor"
        value={orgao}
        onChange={(e) => setOrgao(e.target.value)}
      />

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
        placeholder="Cargo / Função"
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
          <h3>Documento pronto</h3>
          <textarea rows={10} value={resultado} readOnly />
        </>
      )}
    </main>
  );
}