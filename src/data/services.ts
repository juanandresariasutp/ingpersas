// Data mock de servicios de Ingepersas
// Estructura preparada para consumir CMS (Strapi) en el futuro

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path o nombre de icono
}

export const servicesData: Service[] = [
  {
    id: 'soluciones-alternativas',
    title: 'Soluciones Alternativas de Desarrollo',
    description:
      'Diseñamos y ejecutamos soluciones de ingeniería innovadoras adaptadas a las necesidades específicas de cada proyecto industrial, optimizando recursos y tiempos de entrega.',
    icon: 'lightbulb',
  },
  {
    id: 'ingenieria-basica-detalle',
    title: 'Ingeniería Básica y de Detalle',
    description:
      'Desarrollamos proyectos de ingeniería con alto nivel de precisión técnica, desde la conceptualización hasta los planos de detalle listos para construcción.',
    icon: 'blueprint',
  },
  {
    id: 'estructuras-metalicas',
    title: 'Estructuras Metálicas',
    description:
      'Diseño, prefabricación y montaje de estructuras metálicas para aplicaciones industriales y comerciales, con materiales de alta calidad y estricto control de calidad.',
    icon: 'structure',
  },
  {
    id: 'maquinas-industriales',
    title: 'Máquinas para Procesos Industriales',
    description:
      'Diseño y fabricación de maquinaria especializada para procesos industriales, incluyendo equipos de transporte, procesamiento y automatización.',
    icon: 'gear',
  },
  {
    id: 'tanques-atmosfericos',
    title: 'Tanques Atmosféricos en Acero',
    description:
      'Fabricación e instalación de tanques atmosféricos de acero para almacenamiento de líquidos, cumpliendo normas API y estándares internacionales de seguridad.',
    icon: 'tank',
  },
  {
    id: 'tuberias',
    title: 'Prefabricación y Montaje de Tuberías',
    description:
      'Prefabricación de isométricos y montaje de sistemas de tuberías en acero al carbono, acero inoxidable y otros materiales especiales.',
    icon: 'pipe',
  },
  {
    id: 'mantenimiento-paradas',
    title: 'Mantenimiento en Paradas de Planta',
    description:
      'Servicio integral de mantenimiento de equipos durante paradas de planta programadas, garantizando la máxima disponibilidad operativa y seguridad.',
    icon: 'wrench',
  },
  {
    id: 'aislamiento-termico',
    title: 'Aislamiento Térmico',
    description:
      'Instalación de sistemas de aislamiento térmico para tuberías, tanques y equipos, optimizando el consumo energético y protegiendo las instalaciones.',
    icon: 'thermal',
  },
  {
    id: 'sand-blasting-pintura',
    title: 'Sand Blasting y Pintura',
    description:
      'Preparación de superficies mediante sandblasting y aplicación de sistemas de pintura anticorrosiva y de alta temperatura para protección de equipos e infraestructura.',
    icon: 'paint',
  },
];
