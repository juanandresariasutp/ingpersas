'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.nav} aria-label="Navegación principal">
        <div className={styles.container}>
          <Link href="/" className={styles.logo} aria-label="Ingepersas - Inicio">
            <span className={styles.logoText}>INGE</span>
            <span className={styles.logoAccent}>PERSAS</span>
          </Link>

          <ul className={styles.navLinks} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))
                      ? styles.navLinkActive
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contacto" className={styles.ctaButton} id="navbar-cta">
            Contáctenos
          </Link>

          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <ul className={styles.mobileNavLinks} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileNavLink} ${
                    (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))
                      ? styles.mobileNavLinkActive
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contacto" className={styles.mobileCtaButton} id="navbar-mobile-cta">
            Contáctenos
          </Link>
        </div>
      </nav>
    </header>
  );
}
