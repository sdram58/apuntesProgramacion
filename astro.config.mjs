// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// TODO: cuando despliegues en GitHub Pages como proyecto (no como sitio de
// usuario), necesitarás volver a añadir `base: '/NOMBRE-DEL-REPO'` aquí Y
// reescribir todos los enlaces internos hardcodeados en los .md (los que
// empiezan por "/", como en index.md y en las unidades) para que usen el
// helper de base de Astro — si no, se rompen en producción igual que se
// rompían en local hasta que se quitó `base` de aquí.
const SITE = 'https://sdram58.github.io';

function boletinesSidebar(unidad) {
  const n = String(unidad).padStart(2, '0');
  return {
    label: `📝 Boletines U${n}`,
    items: [
      { label: '🟢 Inicial', link: `/boletines/boletin-${n}-inicial/` },
      { label: '✅ Inicial resuelto', link: `/boletines/boletin-${n}-inicial-resuelto/` },
      { label: '⭐ Intermedio', link: `/boletines/boletin-${n}-intermedio/` },
      { label: '💪 Intermedio resuelto', link: `/boletines/boletin-${n}-intermedio-resuelto/` },
      { label: '🔥 Extras', link: `/boletines/boletin-${n}-extras/` },
    ],
  };
}

export default defineConfig({
  site: SITE,
  integrations: [
    starlight({
      title: 'Apuntes Programación Java',
      description: 'Curso completo de Programación en Java para DAM — módulo 0485.',
      favicon: '/favicon.png',
      defaultLocale: 'es',
      locales: {
        root: { label: 'Español', lang: 'es' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/sdram58/apuntesProgramacion' },
      ],
      sidebar: [
        { label: '🚀 U01 · Introducción a la programación', link: '/01-introduccion-programacion/' },
        boletinesSidebar(1),
        { label: '🔤 U02 · Primeros pasos con Java', link: '/02-primeros-pasos-java/' },
        boletinesSidebar(2),
        { label: '🔀 U03 · Excepciones, bucles, arrays y métodos', link: '/03-excepciones-bucles-arrays-metodos/' },
        boletinesSidebar(3),
        { label: '🧩 U04 · Clases y objetos', link: '/04-clases-objetos/' },
        boletinesSidebar(4),
        { label: '🧬 U05 · POO avanzada', link: '/05-poo-avanzada/' },
        boletinesSidebar(5),
        { label: '📚 U06 · Genéricos y colecciones', link: '/06-genericos-colecciones/' },
        boletinesSidebar(6),
        { label: '🌊 U07 · La API Stream', link: '/07-api-stream/' },
        boletinesSidebar(7),
        { label: '📁 U08 · Ficheros y streams', link: '/08-ficheros-streams/' },
        boletinesSidebar(8),
        { label: '🖱️ U09 · Aplicaciones controladas por eventos', link: '/09-aplicaciones-eventos/' },
        boletinesSidebar(9),
        { label: '🗄️ U10 · Bases de datos relacionales', link: '/10-bd-relacionales/' },
        boletinesSidebar(10),
        { label: '🗃️ U11 · Bases de datos orientadas a objetos', link: '/11-bd-orientadas-objetos/' },
        boletinesSidebar(11),
      ],
    }),
  ],
});
