/**
 * API Abstraction Layer - Ingepersas
 *
 * Este módulo es el único punto de contacto con la fuente de datos.
 * Actualmente usa datos mock. Para integrar Strapi o cualquier CMS,
 * solo se modifica este archivo — el resto de la app no cambia.
 *
 * Uso futuro:
 *   const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
 *   const response = await fetch(`${CMS_URL}/api/projects?populate=*`);
 */

import { projectsData, type Project } from '@/data/projects';
import { servicesData, type Service } from '@/data/services';

// Re-exportar tipos para uso en componentes
export type { Project, Service };

// ─── Proyectos ────────────────────────────────────────────────────────────────

/**
 * Obtiene todos los proyectos.
 * @future Reemplazar con: fetch(`${CMS_URL}/api/projects?populate=*`)
 */
export async function getProjects(): Promise<Project[]> {
  // Simula latencia de red para preparar UX de carga
  return Promise.resolve(projectsData);
}

/**
 * Obtiene los proyectos marcados como destacados (para preview en Home).
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((p) => p.featured);
}

/**
 * Obtiene un proyecto por su slug único.
 * @future Reemplazar con: fetch(`${CMS_URL}/api/projects?filters[slug][$eq]=${slug}`)
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

/**
 * Obtiene todos los slugs de proyectos (para generateStaticParams en Next.js).
 */
export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((p) => p.slug);
}

// ─── Servicios ────────────────────────────────────────────────────────────────

/**
 * Obtiene todos los servicios.
 * @future Reemplazar con: fetch(`${CMS_URL}/api/services`)
 */
export async function getServices(): Promise<Service[]> {
  return Promise.resolve(servicesData);
}
