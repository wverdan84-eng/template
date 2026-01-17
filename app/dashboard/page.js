"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <main style={{ padding: 40, maxWidth: 600 }}>
      <h1>DocPronto BR</h1>
      <p>Gerador inteligente de documentos</p>

      {session?.user?.role === "FREE" && (
        <p style={{ color: "red" }}>
          Plano FREE: 1 documento por acesso
        </p>
      )}

      <a href="/documents">
        <button
          style={{
            marginTop: 20,
            padding: 16,
            width: "100%",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            background: "#22c55e",
            fontWeight: "bold",
          }}
        >
          Criar novo documento
        </button>
      </a>

      <div style={{ marginTop: 40, opacity: 0.8 }}>
        <p>✔️ Requerimentos</p>
        <p>✔️ Declarações</p>
        <p>✔️ Recursos</p>
        <p>✔️ Ofícios</p>
        <p>✔️ Trabalhista</p>
        <p>✔️ Educacional</p>
      </div>

      {session?.user?.role === "FREE" && (
        <p style={{ marginTop: 20 }}>
          👉 <a href="/upgrade">Liberar acesso PRO</a>
        </p>
      )}
    </main>
  );
}