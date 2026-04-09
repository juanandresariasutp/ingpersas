import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ingpersas.com'),
  title: {
    default: 'Ingepersas | Ingeniería Mecánica, Civil y Eléctrica',
    template: '%s | Ingepersas',
  },
  description:
    'Ingeniería de Pereira S.A.S. — Soluciones integrales de ingeniería mecánica, civil y eléctrica para el sector industrial y comercial de Colombia.',
  keywords: [
    'ingeniería industrial',
    'estructuras metálicas',
    'tuberías',
    'tanques atmosféricos',
    'mantenimiento industrial',
    'Pereira',
    'Colombia',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'Ingepersas',
    title: 'Ingepersas | Ingeniería Mecánica, Civil y Eléctrica',
    description:
      'Soluciones integrales de ingeniería para el sector industrial y comercial de Colombia.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
