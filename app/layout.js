import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}