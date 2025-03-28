import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    template: '%s | Brasmontagem',
    default: 'Brasmontagem - Laminação em Fibra de Vidro',
  },
  metadataBase: new URL('https://www.brasmontagem.com.br'),
  description:
    'Proteção anticorrosiva especializada para equipamentos industriais com fibra de vidro',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.brasmontagem.com.br',
    siteName: 'Brasmontagem',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
