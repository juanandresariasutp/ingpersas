import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import styles from './AboutSummary.module.css';

export default function AboutSummary() {
  return (
    <section className={`${styles.section} section`}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Visual side */}
          <div className={styles.visual}>
            <div className={styles.visualCard}>
              <span className={styles.visualYear}>+15</span>
              <span className={styles.visualLabel}>Años de experiencia</span>
            </div>
            <div className={styles.visualLines}>
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.line} />
            </div>
          </div>

          {/* Text side */}
          <div className={styles.textContent}>
            <SectionTitle
              label="Quiénes somos"
              title="Ingeniería que transforma la industria"
              align="left"
            />
            <p className={styles.text}>
              Fue creada para dar respuesta a las necesidades del sector industrial
              y comercial del país, a través de procesos de ingeniería eléctrica,
              mecánica y civil.
            </p>
            <p className={styles.text}>
              Con más de 15 años de trayectoria, nos hemos consolidado como un
              aliado confiable para empresas del sector energético, petroquímico
              y de manufactura en toda Colombia.
            </p>

            {/* Highlights */}
            <div className={styles.highlights}>
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className={styles.highlight}>
                  <span className={styles.highlightIcon}>{item.icon}</span>
                  <div>
                    <strong className={styles.highlightTitle}>{item.title}</strong>
                    <span className={styles.highlightDesc}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/nosotros" variant="secondary" size="md" id="about-summary-cta">
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const HIGHLIGHTS = [
  { icon: '🏆', title: 'Calidad certificada', desc: 'Estándares internacionales API, ASME y NSR-10' },
  { icon: '🔧', title: 'Equipo especializado', desc: 'Ingenieros y técnicos certificados' },
  { icon: '🛡️', title: 'HSE comprometido', desc: 'Cero accidentes como objetivo permanente' },
];
