import Link from 'next/link';
import styles from '../app/proyectos/page.module.css';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-6)',
        textAlign: 'center',
        padding: 'var(--spacing-20)',
        paddingTop: 'calc(var(--navbar-height) + var(--spacing-20))',
      }}
    >
      <span style={{ fontSize: '5rem' }}>🔧</span>
      <h1
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--font-size-6xl)',
          fontWeight: 800,
          color: 'var(--color-primary)',
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
        }}
      >
        Página no encontrada
      </h2>
      <p style={{ color: 'var(--color-text-secondary)', maxWidth: 400, lineHeight: 1.6 }}>
        La página que busca no existe o fue movida. Regrese al inicio.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          fontFamily: 'var(--font-primary)',
          fontWeight: 600,
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-white)',
          background: 'var(--color-secondary)',
          padding: 'var(--spacing-3) var(--spacing-8)',
          borderRadius: '9999px',
          textDecoration: 'none',
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
