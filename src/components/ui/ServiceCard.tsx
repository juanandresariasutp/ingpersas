import type { Service } from '@/lib/api';
import styles from './ServiceCard.module.css';

const SERVICE_ICONS: Record<string, string> = {
  lightbulb: '💡',
  blueprint: '📐',
  structure: '🏗️',
  gear: '⚙️',
  tank: '🛢️',
  pipe: '🔩',
  wrench: '🔧',
  thermal: '🌡️',
  paint: '🎨',
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon} aria-hidden="true">
          {SERVICE_ICONS[service.icon] ?? '⚡'}
        </span>
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      <div className={styles.accent} aria-hidden="true" />
    </article>
  );
}
