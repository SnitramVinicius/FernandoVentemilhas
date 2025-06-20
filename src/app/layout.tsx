import "./globals.css";
import { Montserrat, Raleway } from 'next/font/google';
import { MenuProvider } from "@/context/MenuContext"; // ✅ importe o MenuProvider

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
      <body className={`${montserrat.variable} ${raleway.variable}`}>
        <MenuProvider>
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
