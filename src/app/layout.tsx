
import "./globals.css";

export const metadata = {
  title: "Meu Projeto",
  description: "Projeto criado com Next.js e Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}