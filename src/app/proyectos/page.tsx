import type { Metadata } from 'next';
import { getProjects } from '@/lib/api';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/projects/ProjectCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Portafolio de proyectos de Ingepersas: estructuras metálicas, tuberías, tanques atmosféricos y mantenimiento industrial en toda Colombia.',
};

export default async function ProyectosPage() {
  const projects = await getProjects();

  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <SectionTitle
            label="Nuestro portafolio"
            title="Proyectos ejecutados"
            subtitle="Conozca algunos de los proyectos que hemos desarrollado con éxito para la industria colombiana."
            light
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          {projects.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>📋</span>
              <p>No hay proyectos disponibles en este momento.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
