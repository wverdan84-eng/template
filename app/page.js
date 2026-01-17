export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "#fff",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* HERO */}
        <section style={{ textAlign: "center", marginBottom: 80 }}>
          <h1 style={{ fontSize: 42, marginBottom: 10 }}>
            DocPronto BR
          </h1>

          <p style={{ fontSize: 20, opacity: 0.9 }}>
            Gere documentos oficiais prontos em minutos,
            direto do celular ou computador.
          </p>

          <div style={{ marginTop: 30 }}>
            <a href="/login">
              <button
                style={{
                  padding: "14px 28px",
                  fontSize: 16,
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  background: "#22c55e",
                  color: "#000",
                  fontWeight: "bold",
                  marginRight: 10,
                }}
              >
                Começar grátis
              </button>
            </a>

            <a href="/upgrade">
              <button
                style={{
                  padding: "14px 28px",
                  fontSize: 16,
                  borderRadius: 8,
                  border: "1px solid #22c55e",
                  background: "transparent",
                  color: "#22c55e",
                  cursor: "pointer",
                }}
              >
                Ver plano PRO
              </button>
            </a>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 28, marginBottom: 30, textAlign: "center" }}>
            Por que usar o DocPronto BR?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            {[
              "📄 Textos formais e prontos para protocolo",
              "⚡ Geração instantânea",
              "📱 Funciona 100% no celular",
              "🧠 Sem dor de cabeça com linguagem jurídica",
              "⏱️ Economiza tempo e evita erros",
              "🔒 Seguro e simples de usar",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#020617",
                  border: "1px solid #1e293b",
                  padding: 20,
                  borderRadius: 12,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 28, marginBottom: 30, textAlign: "center" }}>
            Como funciona
          </h2>

          <ol style={{ fontSize: 18, lineHeight: 2 }}>
            <li>Escolha o tipo de documento</li>
            <li>Preencha seus dados</li>
            <li>Copie e use o texto pronto</li>
          </ol>
        </section>

        {/* PLANOS */}
        <section
          style={{
            background: "#020617",
            border: "1px solid #1e293b",
            borderRadius: 16,
            padding: 40,
            marginBottom: 80,
          }}
        >
          <h2 style={{ fontSize: 28, textAlign: "center" }}>
            Planos
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 30,
              marginTop: 30,
            }}
          >
            <div>
              <h3>Grátis</h3>
              <p>✔️ 1 documento por acesso</p>
              <p>✔️ Modelo padrão</p>
              <p>❌ Sem histórico</p>
            </div>

            <div>
              <h3 style={{ color: "#22c55e" }}>PRO</h3>
              <p>✔️ Documentos ilimitados</p>
              <p>✔️ Textos mais completos</p>
              <p>✔️ Uso sem restrições</p>
              <strong>R$29/mês</strong>
              <br />
              <strong>ou R$197 vitalício</strong>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 30 }}>
            <a href="/upgrade">
              <button
                style={{
                  padding: "14px 32px",
                  fontSize: 16,
                  borderRadius: 8,
                  border: "none",
                  background: "#22c55e",
                  color: "#000",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Quero acesso PRO
              </button>
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 28 }}>
            Pare de perder tempo escrevendo documentos
          </h2>
          <p style={{ fontSize: 18, opacity: 0.9 }}>
            Use o DocPronto BR e resolva isso em minutos.
          </p>

          <a href="/login">
            <button
              style={{
                marginTop: 20,
                padding: "14px 28px",
                fontSize: 16,
                borderRadius: 8,
                border: "none",
                background: "#22c55e",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Usar agora
            </button>
          </a>
        </section>
      </div>
    </main>
  );
}