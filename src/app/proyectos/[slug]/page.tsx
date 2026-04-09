import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/api';
import ContactCTA from '@/components/sections/ContactCTA';
import styles from '../page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

// Genera rutas estáticas para todos los proyectos
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Meta tags dinámicos por proyecto
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: 'Proyecto no encontrado' };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      {/* Header del proyecto */}
      <div className={styles.detailHeader}>
        <div className="container">
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Migas de pan">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <Link href="/proyectos">Proyectos</Link>
            <span>›</span>
            <span>{project.title}</span>
          </nav>

          <span className={styles.detailCategory}>{project.category}</span>
          <h1 className={styles.detailTitle}>{project.title}</h1>

          {/* Meta info */}
          <div className={styles.detailMeta}>
            <div className={styles.detailMetaItem}>
              <span className={styles.detailMetaLabel}>Cliente</span>
              <span className={styles.detailMetaValue}>{project.client}</span>
            </div>
            <div className={styles.detailMetaItem}>
              <span className={styles.detailMetaLabel}>Fecha de inicio</span>
              <span className={styles.detailMetaValue}>{formatDate(project.startDate)}</span>
            </div>
            <div className={styles.detailMetaItem}>
              <span className={styles.detailMetaLabel}>Fecha de finalización</span>
              <span className={styles.detailMetaValue}>{formatDate(project.endDate)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cuerpo del proyecto */}
      <section className="section">
        <div className="container">
          <div className={styles.detailContent}>
            <p className={styles.detailDescription}>{project.longDescription}</p>
          </div>

          {/* Galería de imágenes */}
          {project.gallery.length > 0 && (
            <div className={styles.gallery}>
              <h2 className={styles.galleryTitle}>Galería del proyecto</h2>
              <div className={styles.galleryGrid}>
                {project.gallery.map((img, index) => (
                  <div key={index} className={styles.galleryItem}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className={styles.galleryImage}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Volver */}
          <div style={{ marginTop: 'var(--spacing-12)' }}>
            <Link
              href="/proyectos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'var(--color-secondary)',
                textDecoration: 'none',
              }}
            >
              ← Volver a proyectos
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
