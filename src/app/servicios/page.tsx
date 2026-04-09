import type { Metadata } from 'next';
import { getServices } from '@/lib/api';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ui/ServiceCard';
import ContactCTA from '@/components/sections/ContactCTA';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Conozca todos los servicios de Ingepersas: estructuras metálicas, tuberías, tanques, mantenimiento industrial, aislamiento térmico y más.',
};

export default async function ServiciosPage() {
  const services = await getServices();

  return (
    <>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <SectionTitle
            label="Lo que ofrecemos"
            title="Nuestros Servicios"
            subtitle="Soluciones de ingeniería con los más altos estándares de calidad para el sector industrial y comercial."
            light
          />
        </div>
      </div>

      {/* Services Grid */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
