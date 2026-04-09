---
trigger: always_on
---

# Convención de Commits - Proyecto Ingepersas

## Objetivo

Definir una convención clara y consistente para los mensajes de commit, con el fin de mantener un historial de cambios organizado, legible y profesional.

---

## Tipos de commits

### 🟢 feat → Nueva funcionalidad

Se utiliza cuando se agrega una nueva funcionalidad o característica que aporta valor al usuario.

**Ejemplos:**

* feat: agregar sección de proyectos
* feat: implementar página de detalle de proyecto
* feat: añadir navegación responsive (menú hamburguesa)
* feat: integrar botón de contacto por WhatsApp

---

### 🔵 fix → Corrección de errores

Se utiliza cuando se corrige un error o bug que afectaba el funcionamiento del sistema.

**Ejemplos:**

* fix: corregir error en renderizado de proyectos
* fix: solucionar problema en navegación mobile
* fix: evitar carga duplicada de componentes
* fix: corregir visualización de imágenes

---

### 🟡 style → Cambios visuales (solo diseño)

Se utiliza cuando se realizan cambios en estilos o apariencia visual sin afectar la lógica del sistema.

**Ejemplos:**

* style: mejorar espaciado entre secciones
* style: ajustar colores según branding
* style: optimizar tipografía
* style: actualizar efectos hover

⚠️ No usar este tipo para corregir errores o lógica.

---

### 🟣 refactor → Mejora de código sin cambiar funcionalidad

Se utiliza para reorganizar, limpiar o mejorar el código existente sin alterar el comportamiento del sistema.

**Ejemplos:**

* refactor: separar componentes de proyectos
* refactor: optimizar estructura de carpetas
* refactor: mejorar legibilidad de funciones
* refactor: reutilizar componentes UI

---

### ⚫ chore → Tareas de configuración o mantenimiento

Se utiliza para cambios internos que no afectan directamente la funcionalidad del usuario.

**Ejemplos:**

* chore: inicializar proyecto
* chore: configurar entorno de desarrollo
* chore: agregar archivos base
* chore: configurar rutas del proyecto

---

### 🟤 docs → Documentación

Se utiliza para cambios relacionados con documentación del proyecto.

**Ejemplos:**

* docs: agregar requerimientos del proyecto
* docs: actualizar instrucciones de instalación
* docs: documentar estructura del proyecto

---

## Reglas generales

* Usar mensajes claros y descriptivos
* Escribir en minúsculas
* No usar puntos finales
* Un commit debe representar un solo cambio lógico
* Evitar mensajes genéricos como:

  * “cambios”
  * “update”
  * “arreglos”

---

## Formato estándar

tipo: descripción breve del cambio

**Ejemplo correcto:**

* feat: agregar sección de servicios
* fix: corregir error en menú mobile

---
