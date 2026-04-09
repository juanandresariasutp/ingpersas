import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Sección principal">
      {/* Background con overlay */}
      <div className={styles.bg}>
        <div className={styles.bgOverlay} />
        <div className={styles.bgPattern} />
      </div>

      {/* Contenido */}
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Ingeniería Industrial &amp; Comercial</span>

          <h1 className={styles.headline}>
            Soluciones de
            <span className={styles.headlineAccent}> ingeniería</span>
            <br />
            que impulsan tu industria
          </h1>

          <p className={styles.subtitle}>
            Diseño, fabricación y montaje de estructuras metálicas, tuberías,
            tanques y mantenimiento industrial con los más altos estándares de calidad.
          </p>

          <div className={styles.actions}>
            <Button href="/proyectos" variant="primary" size="lg" id="hero-cta-projects">
              Ver proyectos
            </Button>
            <Button href="/contacto" variant="outline" size="lg" id="hero-cta-contact">
              Contáctenos
            </Button>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

const STATS = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '+200', label: 'Proyectos ejecutados' },
  { value: '+50', label: 'Clientes satisfechos' },
];
