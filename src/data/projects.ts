// Data mock de proyectos de Ingepersas
// Estructura preparada para consumir CMS (Strapi) en el futuro

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  client: string;
  startDate: string;
  endDate: string;
  category: string;
  coverImage: string;
  gallery: ProjectImage[];
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'tanques-almacenamiento-refineria',
    title: 'Tanques de Almacenamiento - Refinería del Caribe',
    shortDescription:
      'Fabricación e instalación de 4 tanques atmosféricos de acero para almacenamiento de crudo con capacidad de 5.000 barriles cada uno.',
    longDescription: `Este proyecto consistió en el diseño, fabricación e instalación de cuatro tanques atmosféricos de acero al carbono para almacenamiento de crudo liviano, ubicados en las instalaciones de la Refinería del Caribe en Cartagena.

El alcance incluyó la ingeniería de detalle, fabricación en taller, transporte hasta sitio, montaje y pruebas hidrostáticas según norma API 650. Se utilizó acero A36 con tratamiento anticorrosivo exterior e interior conforme a los requerimientos del cliente.

Los trabajos se ejecutaron en un tiempo récord de 6 meses, cumpliendo con todos los estándares de seguridad HSE y sin accidentes reportables durante toda la ejecución.`,
    client: 'Refinería del Caribe S.A.',
    startDate: '2023-03-01',
    endDate: '2023-09-15',
    category: 'Tanques Atmosféricos',
    coverImage: 'https://picsum.photos/seed/tanks-cover/800/600',
    gallery: [
      { src: 'https://picsum.photos/seed/tanks-1/800/600', alt: 'Vista general de los tanques' },
      { src: 'https://picsum.photos/seed/tanks-2/800/600', alt: 'Fabricación en taller' },
      { src: 'https://picsum.photos/seed/tanks-3/800/600', alt: 'Montaje en sitio' },
      { src: 'https://picsum.photos/seed/tanks-4/800/600', alt: 'Pruebas hidrostáticas' },
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'estructura-metalica-planta-cemento',
    title: 'Estructura Metálica - Planta de Cemento Argos',
    shortDescription:
      'Diseño, prefabricación y montaje de estructura metálica para nave industrial de 2.400 m² en planta de producción de cemento.',
    longDescription: `El proyecto contempló el diseño estructural, fabricación y montaje de una nave industrial de 2.400 m² en los predios de la planta de Cemento Argos en Yumbo, Valle del Cauca.

La estructura metálica principal cuenta con pórticos en acero A572 Gr. 50, con cubierta en panel sándwich y fachadas en steel panel. El diseño sismorresistente cumple con la NSR-10 y las especificaciones propias de la industria cementera, incluyendo la resistencia a ambientes con partículas en suspensión.

El proyecto incluyó la coordinación con otras disciplinas (civil, eléctrica e hidráulica) para la entrega integral de la nave operativa.`,
    client: 'Cementos Argos S.A.',
    startDate: '2023-06-01',
    endDate: '2024-01-30',
    category: 'Estructuras Metálicas',
    coverImage: 'https://picsum.photos/seed/structure-cover/800/600',
    gallery: [
      { src: 'https://picsum.photos/seed/structure-1/800/600', alt: 'Estructura metálica en montaje' },
      { src: 'https://picsum.photos/seed/structure-2/800/600', alt: 'Detalle de conexiones' },
      { src: 'https://picsum.photos/seed/structure-3/800/600', alt: 'Vista aérea del proyecto' },
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'sistema-tuberias-planta-petroquimica',
    title: 'Sistema de Tuberías - Planta Petroquímica Ecopetrol',
    shortDescription:
      'Prefabricación y montaje de sistema de tuberías en acero al carbono e inoxidable para proceso de refinación de hidrocarburos.',
    longDescription: `Contrato de prefabricación y montaje de isométricos de tubería para la línea de proceso de la unidad de reformación catalítica de la Refinería de Barrancabermeja de Ecopetrol.

El alcance comprendió más de 800 isométricos en acero al carbono (ASTM A106 Gr. B) y acero inoxidable (ASTM A312 TP 316L), con diámetros desde 1/2" hasta 24". Todos los trabajos de soldadura fueron ejecutados por soldadores certificados y con pruebas de END (Radiografía, Ultrasonido y PT/MT) según norma ASME B31.3.

El proyecto fue ejecutado dentro del presupuesto y con cero accidentes, obteniendo una calificación de desempeño de 98/100 por parte de Ecopetrol.`,
    client: 'Ecopetrol S.A.',
    startDate: '2024-01-15',
    endDate: '2024-08-30',
    category: 'Tuberías',
    coverImage: 'https://picsum.photos/seed/pipes-cover/800/600',
    gallery: [
      { src: 'https://picsum.photos/seed/pipes-1/800/600', alt: 'Prefabricación de tuberías en taller' },
      { src: 'https://picsum.photos/seed/pipes-2/800/600', alt: 'Montaje en planta' },
      { src: 'https://picsum.photos/seed/pipes-3/800/600', alt: 'Pruebas de soldadura' },
      { src: 'https://picsum.photos/seed/pipes-4/800/600', alt: 'Sistema finalizado' },
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'mantenimiento-parada-planta-quimica',
    title: 'Parada de Planta - Químicos de Colombia',
    shortDescription:
      'Mantenimiento integral durante parada de planta programada, incluyendo inspección, reparación y reemplazo de equipos rotativos y estáticos.',
    longDescription: `Mantenimiento integral durante la parada de planta programada de las instalaciones de Químicos de Colombia S.A. en Medellín, con un alcance de 45 días continuos de trabajo.

Los trabajos incluyeron: inspección y reparación de intercambiadores de calor tipo casco y tubo, mantenimiento de bombas centrífugas y de desplazamiento positivo, reemplazo de válvulas de control y seguridad, recubrimiento anticorrosivo de tanques y tuberías, y calibración de instrumentos de proceso.

La ejecución se realizó con un equipo de 80 personas entre turnos diurno y nocturno, logrando la entrega a tiempo y habilitando la planta para su arranque en la fecha programada.`,
    client: 'Químicos de Colombia S.A.',
    startDate: '2024-02-05',
    endDate: '2024-03-22',
    category: 'Mantenimiento Industrial',
    coverImage: 'https://picsum.photos/seed/maintenance-cover/800/600',
    gallery: [
      { src: 'https://picsum.photos/seed/maintenance-1/800/600', alt: 'Inspección de equipos' },
      { src: 'https://picsum.photos/seed/maintenance-2/800/600', alt: 'Mantenimiento de intercambiadores' },
      { src: 'https://picsum.photos/seed/maintenance-3/800/600', alt: 'Equipo de trabajo en campo' },
    ],
    featured: false,
  },
];
