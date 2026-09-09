# Contexto del Proyecto: Curso Programación Java — DAM 0485

## Descripción General
Proyecto para generar los apuntes completos del módulo de Programación (0485) para el CFGS de Desarrollo de Aplicaciones Multiplataforma (DAM). El material se publicará en formato Web, MD y PDF. Idioma: Castellano. Publicado como web estática con **Astro + Starlight** + GitHub Pages.

## Entorno de Desarrollo y Lenguaje (¡CRÍTICO!)
- **Lenguaje:** Java (Última versión LTS - Long Term Support).
- **IDE Oficial del Curso:** IntelliJ IDEA.
  - Todas las explicaciones prácticas, capturas (marcadores), referencias a menús, atajos de teclado, depuración (debugging) y configuración de proyectos deben basarse EXCLUSIVAMENTE en IntelliJ IDEA.

## Origen de Datos y Reestructuración (./Docs)
La base de conocimiento incluye documentos `.odt` y `.pdf` alojados en la carpeta `./Docs` y `./Docs2` y de la web https://sergarb1.github.io/ApuntesProgramacion. Los conceptos tratados en estos documentos históricos DEBEN integrarse en el nuevo índice, garantizando que no se pierda ningún contenido teórico o práctico original.

## Estructura de Unidades Didácticas (14 en total)
1. Introducción a la algorítmica y pseudocódigo (RA1)
2. Primeros pasos en Java: sintaxis y tipos de datos (RA1, RA2)
3. Estructuras de control de flujo y excepciones (RA3)
4. Métodos y recursividad (RA2, RA3)
5. Programación orientada a objetos: clases y objetos (RA2, RA4)
6. Encapsulación, visibilidad y miembros static (RA4)
7. Herencia, polimorfismo e interfaces (RA4, RA7)
8. Arrays y colecciones lineales (RA6)
9. Genéricos y mapas (RA6)
10. Programación funcional y la API Streams (RA6)
11. Consola, ficheros, directorios y expresiones regulares (RA5, RA6)
12. Programación por eventos y GUI (Swing/AWT) (RA5)
13. Acceso a datos desde Java: JDBC, persistencia de objetos y NoSQL (RA8, RA9)
14. Proyecto final integrador (RA5, RA6, RA9)

## Stack Tecnológico, Estilo y Estructura Web
- **Framework:** Astro + Starlight.
- **Tema y Tipografía:** Verde calma (#2d8a4e), degradados, fuente Geist Sans.
- **Layout:** 3 columnas por defecto de Starlight (sidebar, contenido, TOC derecho).
- **Sidebar:** Las unidades en el menú lateral deben llevar emojis temáticos (🚀, 🔤, 🔀, 🧩, ⚡, 🏗️, 🔒, 🧬, 📚, 🗺️, 📁, 🗄️, 🌐) en el frontmatter.
- **Rutas y Archivos:** El Markdown se guardará en `src/content/docs/`.
- **Portadas y PDF:** Se utiliza `portada.png` como imagen hero de la landing y portada del PDF generado. 

## Guía de Redacción
- **Tono:** Distendido, pedagógico y directo.
- **Secciones Especiales:** "⭐ Be the Code" y "¡No Hay Preguntas Tontas!".
- **Callouts:** Uso de sintaxis Markdown para Starlight: `[NOTE]`, `[WARNING]` y `[TIP]`.
- **Boletines:** Mínimo 8 ejercicios en `boletin-XX-inicial.md` y `boletin-XX-intermedio.md`. Soluciones en `...-resuelto.md`. Retos externos en `boletin-XX-extras.md`.

## Boletines (5 por unidad)
```
boletin-XX-inicial.md             → Propuestos fáciles (ejercicios diferentes del resuelto)
boletin-XX-inicial-resuelto.md    → Mismos ejercicios que inicial.md con soluciones.
boletin-XX-intermedio.md          → Propuestos intermedios (ejercicios diferentes del resuelto)
boletin-XX-intermedio-resuelto.md → Mismos ejercicios que intermedio.md con soluciones.
boletin-XX-extras.md              → CodeWars + AceptaElReto con pistas.
```

## Stack tecnológico
- **Framework:** [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/)
- **Tema:** Verde calma (#2d8a4e) + degradados + Geist Sans
- **Buscador:** Pagefind integrado (Starlight)
- **PDF:** `starlight-to-pdf` (generar PDF completo del sitio, por idioma)
- **EPUB:** Pandoc (generar EPUB con sintaxis coloreada y portada)
- **Fuente:** Geist Sans (Vercel)
- **Despliegue:** GitHub Actions → GitHub Pages (`main` branch) o (`master` branch) si la primera no existe. Link repositorio: https://github.com/sdram58/apuntesProgramacion

## Estructura del proyecto
```
src/content/docs/            → Markdown (castellano, raíz)
src/content/docs/index.md    → Portada (imagen principal) + cards unidades + barra descargas + boletin-cards + licencia
src/styles/custom.css        → CSS premium (paleta, botón idioma, hero, cards, download-bar)
public/portada.png           → Imagen de portada para PDF/EPUB (castellano, también en web)
public/                      → PDFs y EPUBs exportados
public/epub/                 → EPUBs generados (ApuntesProgramacion-cast.epub, -val.epub)
public/pdf/                  → PDFs generados (ApuntesProgramacion-es.pdf, -va.pdf)
portada.png                  → Portada común para PDF/EPUB (original en raíz, castellano)
scripts/
  pdf-cover.html             → Portada del PDF con imagen + título superpuesto (castellano)
  pdf-header.html            → Header vacío (elimina la hora de impresión por defecto)
  pdf-footer.html            → Pie con número de página y línea decorativa
  generate-epub.ps1          → Genera EPUB con Pandoc
  epub.css                   → CSS para bloques de código en EPUB
  generate-boletines.ps1     → Genera boletines desde plantillas
  transform-boletines.ps1    → Transforma boletines entre idiomas
  gen.ps1                    → Utilidad de generación
  gen-avanzado-extras.ps1    → Genera ejercicios avanzados/extras
  boletines.ps1              → Utilidad de boletines
strip_solutions.py           → Script para quitar soluciones de boletines resuelto
astro.config.mjs             → Config principal (sidebar, i18n, plugins, emojis unidades)
.github/workflows/deploy.yml → CI/CD para GitHub Pages
```

## Descargas
- **PDF:** `npm run pdf:es` / `npm run pdf:va` (genera PDF por idioma con portada, sin header hora, footer estilizado)
- **EPUB:** `npm run epub:all` (genera EPUB castellano + valenciano con portada y sintaxis coloreada)
- Los enlaces de descarga están disponibles en la página de inicio (`index.md`)

## CI/CD
- `.nojekyll` en raíz del repo para evitar build Jekyll de GitHub Pages
- `actions/checkout@v5` + `actions/setup-node@v5` con Node 24
- `actions/upload-pages-artifact@v5` + `actions/deploy-pages@v5` (Node 24, sin warnings)

## Google Docs
Cada .md se importa directamente a Google Docs:
1. Abrir docs.google.com → Archivo → Importar
2. Seleccionar el .md → se renderiza con títulos, código, tablas y listas

## Comandos
```bash
npm run dev       # Servidor local (http://localhost:4321/ApuntesProgramacion)
npm run build     # Build estático en dist/
npm run preview   # Previsualizar build
npm run pdf:es    # Generar PDF castellano en public/pdf/
npm run pdf:local:es  # PDF castellano desde localhost
npm run epub      # Generar EPUB castellano en public/epub/
npm run epub:all  # Generar EPUB ambos idiomas

Una vez que hayas generado o modificado los archivos `.md` de una unidad, DEBES ejecutar obligatoriamente de forma autónoma el comando `npm run build` para generar el build estático. 
- Si la terminal devuelve algún error de renderizado, enlaces rotos o problemas con el Frontmatter, analiza el error y corrige los archivos `.md` correspondientes sin pedirme permiso.
- Utiliza `npm run dev` únicamente si necesitas levantar el servidor local para comprobar algo específico antes de confirmar que el trabajo está terminado[cite: 1].

## Notas
- Extras (CodeWars + AceptaElReto): solo desde unidad 3 (las dos primeras no tienen contenido relacionado)
- `starlight-llm-actions` eliminado por incompatibilidad; PDF por página con Ctrl+P del navegador
- Las unidades en el sidebar llevan emojis temáticos (🚀, 🔤, 🔀, 🧩, ⚡, 🏗️, 🔒, 🧬, 📚, 🗺️, 📁, 🗄️, 🌐)
- El layout de la web usa las 3 columnas por defecto de Starlight (sidebar, contenido, TOC derecho)
- `portada.svg` se usa como portada común para PDF y EPUB, y se muestra en la web como hero de la landing (castellano)
- Las rutas de la portada en `index.md` y `pdf-cover.html` usan URL absoluta (`https://sdram58.github.io/apuntesProgramacion/portada.svg`) para que funcionen tanto en web como en PDF generado
- Sección de boletines dedicada al final de la landing (`📝 Boletines`); las cards de unidades no incluyen boletines
- `Ver unidad` en las cards es un botón verde degradado (`.unit-link` en `custom.css`)
- PDF generado con `--preceding-html scripts/pdf-cover.html` (portada castellano), `--header scripts/pdf-header.html` (vacío, elimina hora), `--footer scripts/pdf-footer.html` (numeración estilizada)

## Modo de Ejecución Autónomo (Non-Interactive / Unattended)
- Ejecuta todo el flujo de trabajo de principio a fin de manera totalmente autónoma, sin detenerte a pedir confirmación al usuario.
- Si encuentras un archivo faltante, un error de compilación o una discrepancia, soluciónalo directamente tomando la decisión técnica más razonable.
- Realiza todas las tareas de forma encadenada: lectura de fuentes (`./Docs`), (`./Docs2`) y https://sergarb1.github.io/ApuntesProgramacion, entre otros, redacción de la unidad, generación de los 5 boletines, escritura en disco y validación con `npm run build`.
- No muestres mensajes intermedios como "¿Deseas continuar?" o "¿Escribo el siguiente archivo?". Entrega el resultado final únicamente cuando todos los archivos estén creados y el build pase sin errores.
- Deja un link listo para abrir la página y ver las modificaciones echas.