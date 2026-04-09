import type { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactCTA from '@/components/sections/ContactCTA';
import styles from '../servicios/page.module.css';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conozca la historia, misión, visión y política de calidad de Ingeniería de Pereira S.A.S. — Ingepersas.',
};

const POLICY_ITEMS = [
  'Ofrecer productos y servicios con altos estándares de calidad respaldados por nuestra experiencia.',
  'Garantizar la satisfacción de nuestros clientes mediante soluciones técnicas precisas y oportunas.',
  'Desarrollar proyectos con responsabilidad ambiental y compromiso con la seguridad industrial.',
  'Fomentar el crecimiento del talento humano con capacitación continua y trabajo en equipo.',
  'Mantener la mejora continua de nuestros procesos para ser más competitivos y eficientes.',
  'Cumplir con la normatividad legal vigente aplicable a nuestras operaciones.',
];

export default function NosotrosPage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <SectionTitle
            label="Nuestra empresa"
            title="Quiénes somos"
            subtitle="Más de 15 años construyendo soluciones de ingeniería para Colombia."
            light
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.nosotrosContent}>
            {/* Descripción */}
            <div>
              <p className={styles.cardText} style={{ fontSize: 'var(--font-size-lg)', maxWidth: 760 }}>
                Ingeniería de Pereira S.A.S. — <strong>Ingepersas</strong> — fue creada para dar
                respuesta a las necesidades del sector industrial y comercial del país, a través de
                procesos de ingeniería eléctrica, mecánica y civil.
              </p>
              <br />
              <p className={styles.cardText} style={{ maxWidth: 760 }}>
                Con sede en Pereira, Risaralda, hemos ejecutado proyectos en todo el territorio
                nacional, desarrollando relaciones de largo plazo con compañías del sector
                energético, petroquímico, cementero y manufacturero. Nuestra filosofía de trabajo
                combina rigor técnico, compromiso con la seguridad y orientación al cliente.
              </p>
            </div>

            {/* Misión & Visión */}
            <div className={styles.misionVisionGrid}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🎯</span>
                <span className={styles.cardLabel}>Misión</span>
                <h2 className={styles.cardTitle}>Nuestra misión</h2>
                <p className={styles.cardText}>
                  Ofrecer productos y servicios con altos estándares de calidad, respaldados
                  por experiencia y confiabilidad en la industria. Trabajamos para convertirnos
                  en el aliado estratégico de confianza para cada uno de nuestros clientes,
                  generando valor en cada proyecto que ejecutamos.
                </p>
              </div>

              <div className={styles.card}>
                <span className={styles.cardIcon}>🔭</span>
                <span className={styles.cardLabel}>Visión</span>
                <h2 className={styles.cardTitle}>Nuestra visión</h2>
                <p className={styles.cardText}>
                  Consolidarnos como empresa líder en servicios de ingeniería mecánica, civil
                  y eléctrica a nivel nacional, reconocidos por la excelencia técnica, la
                  innovación en nuestros procesos y el impacto positivo en el desarrollo
                  industrial de Colombia.
                </p>
              </div>
            </div>

            {/* Política de calidad */}
            <div className={styles.policySection}>
              <h2 className={styles.policyTitle}>🏅 Política de Calidad</h2>
              <ul className={styles.policyList} role="list">
                {POLICY_ITEMS.map((item) => (
                  <li key={item} className={styles.policyItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
