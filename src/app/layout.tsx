
import "./globals.css";
import { Montserrat, Raleway } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});
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
      <body className={`${montserrat.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}