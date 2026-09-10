# Contexto del Proyecto: Curso Programación Java — DAM 0485

## Descripción General
Proyecto para generar los apuntes completos del módulo de Programación (0485) para el CFGS de Desarrollo de Aplicaciones Multiplataforma (DAM). El material se publicará en formato Web, MD y PDF. Idioma: Castellano. Publicado como web estática con **Astro + Starlight** + GitHub Pages.

## Entorno de Desarrollo y Lenguaje (¡CRÍTICO!)
- **Lenguaje:** Java (Última versión LTS - Long Term Support).
- **IDE Oficial del Curso:** IntelliJ IDEA.
  - Todas las explicaciones prácticas, capturas (marcadores), referencias a menús, atajos de teclado, depuración (debugging) y configuración de proyectos deben basarse EXCLUSIVAMENTE en IntelliJ IDEA.

## Origen de Datos y Reestructuración (./Docs)
La base de conocimiento incluye documentos `.odt`, `.docx` y `.pdf` alojados en la carpeta `./Docs` y `./Docs2`. `Docs/programacion.docx` es la **programación didáctica de referencia**: de ahí salen el índice de unidades, sus contenidos, RA/CE y la temporalización en horas — no se inventan datos que no estén ahí. `Docs/*.odt` son los apuntes ya desarrollados por el profesor titular (uno por unidad) y `Docs2/` son los apuntes de otro profesor (carpetas `UD01`–`UD11`, con una agrupación de contenidos ligeramente distinta). El trabajo consiste en fusionar ambas fuentes dentro de los límites exactos de las 11 unidades de la programación (si el contenido de una carpeta de `Docs2` cruza dos unidades, se reparte entre ambas), completando con contenido propio cualquier hueco que se detecte.

## Estructura de Unidades Didácticas (11 en total — según Docs/programacion.docx)
1. Introducción a la programación (con Java)
2. Primeros pasos con Java
3. Excepciones, bucles, arrays y métodos
4. Clases y objetos
5. Programación orientada a objetos avanzada
6. Genéricos y colecciones de datos
7. La API Stream
8. Ficheros y streams
9. Aplicaciones controladas por eventos
10. Trabajar con bases de datos relacionales
11. Trabajar con bases de datos orientadas a objetos

RA y CE, así como la temporalización en horas de cada unidad, se toman literalmente de `Docs/programacion.docx` — no se recalculan ni se actualizan a otro currículo distinto del que ese documento describe.

## Stack Tecnológico, Estilo y Estructura Web
- **Framework:** Astro + Starlight.
- **Tema y Tipografía:** Verde calma (#2d8a4e), degradados, fuente Geist Sans.
- **Layout:** 3 columnas por defecto de Starlight (sidebar, contenido, TOC derecho).
- **Sidebar:** Las unidades en el menú lateral deben llevar emojis temáticos (🚀, 🔤, 🔀, 🧩, 🧬, 📚, 🌊, 📁, 🖱️, 🗄️, 🗃️) en el frontmatter.
- **Rutas y Archivos:** El Markdown se guardará en `src/content/docs/`.
- **Portadas y PDF:** Se utiliza `portada.svg` como imagen hero de la landing y portada de los PDF generados.

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
- **PDF:** Puppeteer (`scripts/generate-pdfs.mjs`) — genera **un PDF por unidad y un PDF por boletín** (no un único PDF de todo el sitio), imprimiendo cada página del sitio ya construido.
- **Fuente:** Geist Sans (Vercel)
- **Despliegue:** GitHub Actions → GitHub Pages (`main` branch) o (`master` branch) si la primera no existe. Link repositorio: https://github.com/sdram58/apuntesProgramacion

## Estructura del proyecto
```
src/content/docs/            → Markdown (castellano, raíz)
src/content/docs/index.md    → Portada (imagen principal) + cards unidades + barra descargas + boletin-cards + licencia
src/styles/custom.css        → CSS premium (paleta, hero, cards, download-bar)
public/portada.svg           → Portada común para la web (hero) y para los PDF generados
public/pdf/unidades/         → Un PDF por unidad (01-introduccion-programacion.pdf, ...)
public/pdf/boletines/        → Un PDF por boletín
scripts/
  pdf-cover.html             → Portada del PDF con imagen + título superpuesto
  pdf-header.html            → Header vacío (elimina la hora de impresión por defecto)
  pdf-footer.html            → Pie con número de página y línea decorativa
  generate-pdfs.mjs          → Levanta `astro preview` y usa Puppeteer para imprimir cada unidad/boletín a su propio PDF
astro.config.mjs             → Config principal (sidebar, i18n, plugins, emojis unidades)
.github/workflows/deploy.yml → CI/CD para GitHub Pages
```

## Descargas
- **PDF:** flujo en dos pasos — `npm run build` (construye el sitio) → `npm run pdf` (sirve ese build y genera cada PDF con Puppeteer en `public/pdf/`) → `npm run build` otra vez (para que `dist/` incluya ya los PDF nuevos antes de desplegar).
- Los enlaces de descarga están disponibles en la página de inicio (`index.md`)
- La generación de PDF es un paso **local**, no forma parte de `deploy.yml` (Puppeteer/Chromium en el runner de GitHub Actions añade fragilidad que no compensa por ahora): genera los PDF en local y haz commit de `public/pdf/` antes de desplegar.

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
npm run dev       # Servidor local (http://localhost:4321)
npm run build     # Build estático en dist/
npm run preview   # Previsualizar build
npm run pdf       # Genera un PDF por unidad y por boletín en public/pdf/ (requiere build previo)
```

Una vez que hayas generado o modificado los archivos `.md` de una unidad, DEBES ejecutar obligatoriamente de forma autónoma el comando `npm run build` para generar el build estático. 
- Si la terminal devuelve algún error de renderizado, enlaces rotos o problemas con el Frontmatter, analiza el error y corrige los archivos `.md` correspondientes sin pedirme permiso.
- Utiliza `npm run dev` únicamente si necesitas levantar el servidor local para comprobar algo específico antes de confirmar que el trabajo está terminado.

## Notas
- Extras (CodeWars + AceptaElReto): solo desde unidad 3 (las dos primeras no tienen contenido relacionado)
- Las unidades en el sidebar llevan emojis temáticos (🚀, 🔤, 🔀, 🧩, 🧬, 📚, 🌊, 📁, 🖱️, 🗄️, 🗃️)
- El layout de la web usa las 3 columnas por defecto de Starlight (sidebar, contenido, TOC derecho)
- `portada.svg` se usa como portada común para los PDF y se muestra en la web como hero de la landing
- Las rutas de la portada en `index.md` y `pdf-cover.html` usan URL absoluta (`https://sdram58.github.io/apuntesProgramacion/portada.svg`) para que funcionen tanto en web como en PDF generado
- Sección de boletines dedicada al final de la landing (`📝 Boletines`); las cards de unidades no incluyen boletines
- `Ver unidad` en las cards es un botón verde degradado (`.unit-link` en `custom.css`)
- PDF generado con `--preceding-html scripts/pdf-cover.html` (portada), `--header scripts/pdf-header.html` (vacío, elimina hora), `--footer scripts/pdf-footer.html` (numeración estilizada)

## Modo de Ejecución Autónomo (Non-Interactive / Unattended)
- Ejecuta todo el flujo de trabajo de principio a fin de manera totalmente autónoma, sin detenerte a pedir confirmación al usuario.
- Si encuentras un archivo faltante, un error de compilación o una discrepancia, soluciónalo directamente tomando la decisión técnica más razonable.
- Realiza todas las tareas de forma encadenada: lectura de fuentes (`./Docs`, `./Docs2`), redacción de la unidad, generación de los 5 boletines, escritura en disco y validación con `npm run build`.
- No muestres mensajes intermedios como "¿Deseas continuar?" o "¿Escribo el siguiente archivo?". Entrega el resultado final únicamente cuando todos los archivos estén creados y el build pase sin errores.
- Deja un link listo para abrir la página y ver las modificaciones echas.