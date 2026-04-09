import Link from 'next/link';
import styles from './Footer.module.css';

const WHATSAPP_NUMBER = '573148589650';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, quiero información sobre sus servicios');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const NAV_LINKS = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top section */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>INGE</span>
              <span className={styles.logoAccent}>PERSAS</span>
            </Link>
            <p className={styles.brandDesc}>
              Ingeniería de Pereira S.A.S. — Soluciones integrales de ingeniería
              mecánica, civil y eléctrica para el sector industrial.
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Navegación</h3>
            <ul className={styles.columnLinks} role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.columnLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contacto</h3>
            <ul className={styles.contactList} role="list">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  id="footer-whatsapp"
                >
                  <span className={styles.contactIcon}>💬</span>
                  +57 314 858 9650
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial@ingpersas.com"
                  className={styles.contactLink}
                  id="footer-email"
                >
                  <span className={styles.contactIcon}>✉️</span>
                  comercial@ingpersas.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                Pereira, Risaralda, Colombia
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Ingeniería de Pereira S.A.S. Todos los derechos reservados.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            id="footer-whatsapp-cta"
          >
            <WhatsAppIcon />
            Escríbenos
          </a>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsapp}
        aria-label="Contactar por WhatsApp"
        id="floating-whatsapp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </footer>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
