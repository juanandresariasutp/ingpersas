import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AboutSummary from '@/components/sections/AboutSummary';
import ServicesHighlight from '@/components/sections/ServicesHighlight';
import ProjectsPreview from '@/components/sections/ProjectsPreview';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Inicio | Ingepersas - Ingeniería Industrial',
  description:
    'Ingeniería de Pereira S.A.S. — Soluciones integrales de ingeniería mecánica, civil y eléctrica. Estructuras metálicas, tuberías, tanques y mantenimiento industrial.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <ServicesHighlight />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
}
