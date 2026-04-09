import type { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import styles from '../servicios/page.module.css';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contáctenos por WhatsApp o correo electrónico. Ingepersas — Ingeniería de Pereira S.A.S.',
};

const WHATSAPP_NUMBER = '573148589650';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, quiero información sobre sus servicios');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function ContactoPage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <SectionTitle
            label="Estamos para servirle"
            title="Contáctenos"
            subtitle="Comuníquese con nosotros y un ingeniero le atenderá a la brevedad posible."
            light
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Información de contacto */}
            <div className={styles.contactInfo}>
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Información de contacto
              </h2>
              <p
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                Atendemos proyectos en todo el territorio nacional. No dude en
                comunicarse con nosotros para cualquier consulta técnica o comercial.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                id="contact-whatsapp-link"
              >
                <span className={styles.contactItemIcon}>💬</span>
                <div>
                  <span className={styles.contactItemLabel}>WhatsApp</span>
                  <span className={styles.contactItemValue}>+57 314 858 9650</span>
                </div>
              </a>

              <a
                href="tel:+573148589650"
                className={styles.contactItem}
                id="contact-phone-link"
              >
                <span className={styles.contactItemIcon}>📞</span>
                <div>
                  <span className={styles.contactItemLabel}>Teléfono</span>
                  <span className={styles.contactItemValue}>+57 314 858 9650</span>
                </div>
              </a>

              <a
                href="mailto:comercial@ingpersas.com"
                className={styles.contactItem}
                id="contact-email-link"
              >
                <span className={styles.contactItemIcon}>✉️</span>
                <div>
                  <span className={styles.contactItemLabel}>Correo electrónico</span>
                  <span className={styles.contactItemValue}>comercial@ingpersas.com</span>
                </div>
              </a>

              <div className={styles.contactItem} style={{ cursor: 'default' }}>
                <span className={styles.contactItemIcon}>📍</span>
                <div>
                  <span className={styles.contactItemLabel}>Ubicación</span>
                  <span className={styles.contactItemValue}>Pereira, Risaralda, Colombia</span>
                </div>
              </div>

              <div className={styles.contactItem} style={{ cursor: 'default' }}>
                <span className={styles.contactItemIcon}>🕑</span>
                <div>
                  <span className={styles.contactItemLabel}>Horario de atención</span>
                  <span className={styles.contactItemValue}>Lun – Vie: 8:00 am – 6:00 pm</span>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp */}
            <div className={styles.whatsappCta}>
              <div style={{ fontSize: '3rem' }}>💬</div>
              <h2 className={styles.whatsappCtaTitle}>
                La forma más rápida de contactarnos
              </h2>
              <p className={styles.whatsappCtaText}>
                Escríbanos directamente por WhatsApp con el mensaje predefinido
                o cuéntenos sobre su proyecto. Le respondemos en minutos.
              </p>
              <Button
                href={WHATSAPP_LINK}
                variant="primary"
                size="lg"
                external
                fullWidth
                id="contact-page-whatsapp-btn"
              >
                Abrir WhatsApp
              </Button>
              <p
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: 'var(--spacing-2)',
                }}
              >
                Mensaje predefinido: &quot;Hola, quiero información sobre sus servicios&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
