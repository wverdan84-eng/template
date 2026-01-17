"use client";

import { useRouter } from "next/navigation";

export default function Documents() {
  const router = useRouter();

  const documentos = [
    { id: "requerimento", nome: "Requerimento Administrativo" },
    { id: "declaracao", nome: "Declaração" },
    { id: "recurso", nome: "Recurso Administrativo" },
    { id: "oficio", nome: "Ofício" },
    { id: "trabalhista", nome: "Documento Trabalhista" },
    { id: "educacional", nome: "Documento Educacional" },
  ];

  return (
    <main style={{ padding: 40, maxWidth: 600 }}>
      <h1>Escolha o tipo de documento</h1>

      {documentos.map((doc) => (
        <button
          key={doc.id}
          onClick={() => router.push(`/documents/${doc.id}`)}
          style={{
            display: "block",
            width: "100%",
            padding: 16,
            marginTop: 12,
            borderRadius: 8,
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {doc.nome}
        </button>
      ))}
    </main>
  );
}