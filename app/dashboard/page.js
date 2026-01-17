"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");
  const [pedido, setPedido] = useState("");
  const [resultado, setResultado] = useState("");
  const [gerou, setGerou] = useState(false);

  function gerarDocumento() {
    if (session?.user?.role === "FREE" && gerou) {
      alert("Plano FREE permite apenas 1 documento. Faça upgrade para continuar.");
      return;
    }

    const texto = `Eu, ${nome}, portador(a) do CPF ${cpf}, ocupante do cargo ${cargo}, venho por meio deste requerer ${pedido}.

Nestes termos,
Pede deferimento.`;

    setResultado(texto);
    setGerou(true);
  }

  return (
    <main style={{ padding: 40, maxWidth: 600 }}>
      <h1>DocPronto BR</h1>
      <p>Gerador de Requerimento Administrativo</p>

      {session?.user?.role === "FREE" && (
        <p style={{ color: "red" }}>
          Plano FREE: 1 documento por acesso
        </p>
      )}

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
          {session?.user?.role === "FREE" && (
            <p>
              👉 <a href="/upgrade">Liberar acesso ilimitado (PRO)</a>
            </p>
          )}
        </>
      )}
    </main>
  );
}