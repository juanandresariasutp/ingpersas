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

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;

// ─── Proyectos ────────────────────────────────────────────────────────────────

export async function getProjects(): Promise<Project[]> {
  if (CMS_URL) {
    try {
      // populate=* para traer galería e imágenes de portada si estuvieran modeladas en Strapi usando Media
      const res = await fetch(`${CMS_URL}/api/projects?populate=*`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        // Mapeo básico de respuesta Strapi v4/v5 a nuestra interfaz local
        if (json.data && json.data.length > 0) {
          return json.data.map((item: any) => {
            // Mapeo seguro de imágenes para Strapi v5 (con soporte nativo para Media)
            const coverUrl = item.coverImage?.url 
              ? (item.coverImage.url.startsWith('/') ? `${CMS_URL}${item.coverImage.url}` : item.coverImage.url)
              : 'https://picsum.photos/seed/placeholder/800/600';
              
            const mappedGallery = Array.isArray(item.gallery)
              ? item.gallery.map((img: any) => ({
                  src: img.url.startsWith('/') ? `${CMS_URL}${img.url}` : img.url,
                  alt: img.alternativeText || 'Project image'
                }))
              : [];

            return {
              id: item.documentId || item.id,
              slug: item.slug,
              title: item.title,
              shortDescription: item.shortDescription,
              longDescription: item.longDescription,
              client: item.client,
              startDate: item.startDate,
              endDate: item.endDate,
              category: item.category,
              featured: item.featured,
              coverImage: coverUrl,
              gallery: mappedGallery
            };
          });
        }
      }
    } catch (e) {
      console.error('Error fetching from CMS', e);
    }
  }
  // Fallback a mock data
  return Promise.resolve(projectsData);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (CMS_URL) {
    try {
      const res = await fetch(`${CMS_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          const item = json.data[0];
          const coverUrl = item.coverImage?.url 
            ? (item.coverImage.url.startsWith('/') ? `${CMS_URL}${item.coverImage.url}` : item.coverImage.url)
            : 'https://picsum.photos/seed/placeholder/800/600';
            
          const mappedGallery = Array.isArray(item.gallery)
            ? item.gallery.map((img: any) => ({
                src: img.url.startsWith('/') ? `${CMS_URL}${img.url}` : img.url,
                alt: img.alternativeText || 'Project image'
              }))
            : [];

          return {
            id: item.documentId || item.id,
            slug: item.slug,
            title: item.title,
            shortDescription: item.shortDescription,
            longDescription: item.longDescription,
            client: item.client,
            startDate: item.startDate,
            endDate: item.endDate,
            category: item.category,
            featured: item.featured,
            coverImage: coverUrl,
            gallery: mappedGallery
          };
        }
      }
    } catch (e) {
      console.error('Error fetching project from CMS', e);
    }
  }
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((p) => p.slug);
}

// ─── Servicios ────────────────────────────────────────────────────────────────

export async function getServices(): Promise<Service[]> {
  if (CMS_URL) {
    try {
      const res = await fetch(`${CMS_URL}/api/services`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          return json.data.map((item: any) => ({
            id: item.documentId || item.id,
            title: item.title,
            description: item.description,
            icon: item.icon
          }));
        }
      }
    } catch (e) {
      console.error('Error fetching services from CMS', e);
    }
  }
  return Promise.resolve(servicesData);
}
