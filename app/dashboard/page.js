import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "PRO") {
    return (
      <main style={{ padding: 40 }}>
        <h1>Acesso restrito</h1>
        <p>Este conteúdo é exclusivo para usuários PRO.</p>
        <a href="/upgrade">Fazer upgrade</a>
      </main>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Dashboard PRO</h1>
      <p>Bem-vindo ao conteúdo premium 🔥</p>
    </main>
  );
}