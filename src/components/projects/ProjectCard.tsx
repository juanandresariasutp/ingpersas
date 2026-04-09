import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';
import type { Project } from '@/lib/api';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/proyectos/${project.slug}`} className={styles.imageWrapper} tabIndex={-1}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay} />
        <span className={styles.category}>{project.category}</span>
      </Link>

      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={`/proyectos/${project.slug}`} className={styles.titleLink}>
            {project.title}
          </Link>
        </h3>
        <p className={styles.description}>{project.shortDescription}</p>
        <Link
          href={`/proyectos/${project.slug}`}
          className={styles.cta}
          id={`project-card-${project.slug}`}
        >
          Ver proyecto
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
