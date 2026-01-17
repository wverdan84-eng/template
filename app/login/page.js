"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Login</h1>
      <button
        onClick={() => signIn("credentials", { email: "teste@email.com", callbackUrl: "/dashboard" })}
      >
        Entrar
      </button>
    </main>
  );
}