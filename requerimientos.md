# Requerimientos Web - Ingepersas

## 1. Objetivo del proyecto

Desarrollar un sitio web corporativo moderno para Ingepersas, orientado a presentar sus servicios, información institucional y portafolio de proyectos. El sitio debe incluir una sección dinámica de proyectos preparada para futura integración con un CMS (ej: Strapi).

---

## 2. Enfoque visual y branding

### Estilo visual

* Diseño moderno, limpio y profesional
* Enfoque industrial/ingeniería con estética contemporánea
* Uso de espacios en blanco y jerarquía visual clara

### Colores corporativos

* Primario: #041c35
* Secundario: #c01f30
* Complementario: #6c1d1e
* Neutro: #f1f0f5

### Tipografía

* Principal: Poppins
* Secundaria: libre elección (complementaria y legible)

---

## 3. Estructura del sitio

### 3.1 Navbar

* Navbar simple y limpio
* Links:

  * Inicio
  * Servicios
  * Nosotros
  * Proyectos
  * Contacto
* Versión mobile:

  * Menú tipo hamburguesa

---

### 3.2 Home

Secciones:

#### Hero

* Imagen o video representativo industrial
* Texto principal (headline)
* Subtítulo
* CTA hacia contacto o proyectos

#### Sobre la empresa (resumen)

Texto base:

> Fue creada para dar respuesta a las necesidades del sector industrial y comercial del país, a través de procesos de ingeniería eléctrica, mecánica y civil.

#### Servicios destacados

* Vista resumida de servicios principales

#### Proyectos destacados

* Preview de proyectos recientes (máx 3–4)
* Botón “Ver todos”

#### CTA final

* Enlace a WhatsApp

---

### 3.3 Servicios

Presentación en formato de cards:

Servicios a incluir:

* Soluciones alternativas desarrollo
* Desarrollo de ingeniería básica y de detalle
* Diseño, prefabricación y montaje de estructuras metálicas
* Diseño de máquinas para procesos industriales
* Tanques atmosféricos en acero
* Prefabricación y montaje de tuberías
* Mantenimiento de equipos en paradas de planta
* Aislamiento térmico
* Sand blasting y pintura

Cada servicio debe tener:

* Título
* Descripción breve

---

### 3.4 Nosotros

Secciones:

#### Descripción

Texto base proporcionado (adaptado a formato web)

#### Misión

INGENIERÍA DE PEREIRA S.A.S. ofrece productos y servicios con altos estándares de calidad, respaldados por experiencia y confiabilidad en la industria.

#### Visión

Consolidarse como empresa líder en servicios de ingeniería mecánica, civil y eléctrica.

#### Política de calidad

Resumen estructurado del contenido entregado

---

### 3.5 Proyectos (Sección dinámica)

#### Vista general (listado)

* Grid responsive (3 columnas desktop / 1 mobile)
* Cada proyecto incluye:

  * Imagen principal
  * Título
  * Descripción corta
  * Botón “Ver más”

---

#### Vista detalle (página individual)

Cada proyecto debe incluir:

* Título
* Descripción larga
* Galería de imágenes (máximo 10)
* Fecha de inicio
* Fecha de finalización
* Nombre del cliente

---

### 3.6 Contacto

* Botón directo a WhatsApp
* Mensaje predefinido:

  * “Hola, quiero información sobre sus servicios”
* Posibilidad de incluir:

  * Teléfono
  * Correo (opcional)

---

## 4. Requerimientos técnicos

* Framework: React o Next.js
* Arquitectura modular
* Código limpio y escalable

### Datos

* Uso de datos mock inicialmente
* Estructura preparada para consumir API externa (CMS)

### Rutas

* Rutas dinámicas:

  * `/proyectos`
  * `/proyectos/[slug]`

---

## 5. UI/UX

* Diseño completamente responsive
* Optimización mobile-first
* Navegación clara e intuitiva
* Uso de grid para organización visual
* Animaciones suaves (hover, scroll, fade)

---

## 6. SEO básico

* Meta title y description por página
* Uso correcto de headings (H1, H2, H3)
* URLs amigables (slug en proyectos)
* Optimización de imágenes (lazy loading)

---

## 7. Performance

* Carga optimizada de imágenes
* Componentes reutilizables
* Buen manejo de estados

---

## 8. Preparación para CMS

El proyecto debe quedar preparado para integrar:

* CMS (ej: Strapi)
* API REST o GraphQL
* Gestión dinámica de contenido

---

## 9. Estado inicial (Demo)

* Implementación con datos mock
* Simulación de proyectos dinámicos
* Estructura lista para conexión futura a CMS

---

## 10. Entregables

* Sitio web funcional (frontend)
* Código organizado y documentado
* Base lista para integración con backend (Strapi)

---
