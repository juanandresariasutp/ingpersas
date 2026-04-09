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

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className={styles.policySection}>
            <h2 className={styles.policyTitle}>La importancia de contratar a expertos</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
              En Ingepersas entendemos que la industria no puede detenerse y los riesgos no son una opción. Contratar una empresa seria y legalmente constituida le garantiza:
            </p>
            <ul className={styles.policyList}>
              <li className={styles.policyItem}>
                <strong>Cumplimiento de Normativas:</strong> Operamos bajo estrictos estándares de seguridad industrial (SST) para proteger la vida y la infraestructura.
              </li>
              <li className={styles.policyItem}>
                <strong>Garantía de Calidad:</strong> Utilizamos materiales certificados y personal altamente calificado en soldadura, montaje y diseño.
              </li>
              <li className={styles.policyItem}>
                <strong>Tiempos de Entrega Reales:</strong> Planificación milimétrica que evita sobrecostos operativos por retrasos en sus proyectos.
              </li>
              <li className={styles.policyItem}>
                <strong>Respaldo Jurídico:</strong> Contratos formales, pólizas de cumplimiento y responsabilidad civil que blindan económicamente a su empresa.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
