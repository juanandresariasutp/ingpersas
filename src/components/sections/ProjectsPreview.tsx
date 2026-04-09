import { getFeaturedProjects } from '@/lib/api';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import ProjectCard from '@/components/projects/ProjectCard';
import styles from './ProjectsPreview.module.css';

export default async function ProjectsPreview() {
  const projects = await getFeaturedProjects();

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <SectionTitle
          label="Nuestro portafolio"
          title="Proyectos que hablan por sí solos"
          subtitle="Una muestra de nuestra experiencia ejecutando proyectos de alta complejidad para la industria colombiana."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/proyectos" variant="primary" size="lg" id="projects-preview-cta">
            Ver todos los proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}
