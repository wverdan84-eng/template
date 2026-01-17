export default function Home() {
  return (
    <main style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      {/* HERO */}
      <h1>DocPronto BR</h1>
      <h2>
        Crie documentos oficiais prontos em menos de 2 minutos
      </h2>

      <p>
        Sem linguagem difícil. Sem modelos confusos.
        Preencha o formulário e receba o texto pronto para usar.
      </p>

      <a href="/login">
        <button>Começar agora (grátis)</button>
      </a>

      <hr />

      {/* BENEFÍCIOS */}
      <h3>Por que usar o DocPronto BR?</h3>
      <ul>
        <li>✅ Documentos claros e formais</li>
        <li>✅ Funciona no celular</li>
        <li>✅ Ideal para servidores, estudantes e trabalhadores</li>
        <li>✅ Economiza tempo e evita erros</li>
      </ul>

      <hr />

      {/* COMO FUNCIONA */}
      <h3>Como funciona</h3>
      <ol>
        <li>Escolha o tipo de documento</li>
        <li>Preencha seus dados</li>
        <li>Gere o texto pronto</li>
      </ol>

      <hr />

      {/* PREÇO */}
      <h3>Planos</h3>

      <p>
        <strong>Grátis</strong> – 1 documento por acesso
      </p>

      <p>
        <strong>PRO</strong> – Documentos ilimitados <br />
        <strong>R$29/mês</strong> ou <strong>R$197 vitalício</strong>
      </p>

      <a href="/upgrade">
        <button>Quero acesso PRO</button>
      </a>

      <hr />

      {/* CTA FINAL */}
      <h3>
        Pare de perder tempo escrevendo documentos.
      </h3>
      <p>
        Use o DocPronto BR e resolva isso em minutos.
      </p>

      <a href="/login">
        <button>Usar agora</button>
      </a>
    </main>
  );
}