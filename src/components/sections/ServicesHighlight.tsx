import { getServices } from '@/lib/api';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ui/ServiceCard';
import styles from './ServicesHighlight.module.css';

export default async function ServicesHighlight() {
  const services = await getServices();
  const highlighted = services.slice(0, 4);

  return (
    <section className={`${styles.section} section section--alt`}>
      <div className={`container`}>
        <SectionTitle
          label="Nuestros servicios"
          title="Ingeniería integral para su industria"
          subtitle="Ofrecemos soluciones completas en ingeniería mecánica, civil y eléctrica con los más altos estándares de calidad."
        />

        <div className={styles.grid}>
          {highlighted.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/servicios" variant="secondary" size="lg" id="services-highlight-cta">
            Ver todos los servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
