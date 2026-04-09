import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  label?: string;       // Etiqueta pequeña encima del título
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;      // Texto claro para fondos oscuros
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`${styles.wrapper} ${styles[`align--${align}`]} ${light ? styles.light : ''}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
