import { Providers } from "./providers";

export const metadata = {
  title: "SaaS Template",
  description: "Template SaaS Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}