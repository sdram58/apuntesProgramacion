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

export default defineConfig({
  site: SITE,
  integrations: [
    starlight({
      title: 'Apuntes Programación Java',
      description: 'Curso completo de Programación en Java para DAM/DAW — RD 405/2023, módulo 0485.',
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
        {
          label: '🚀 U01 · Algorítmica y pseudocódigo',
          link: '/01-introduccion-algoritmica-pseudocodigo/',
        },
        {
          label: '📝 Boletines U01',
          items: [
            { label: '🟢 Inicial', link: '/boletines/boletin-01-inicial/' },
            { label: '✅ Inicial resuelto', link: '/boletines/boletin-01-inicial-resuelto/' },
            { label: '⭐ Intermedio', link: '/boletines/boletin-01-intermedio/' },
            { label: '💪 Intermedio resuelto', link: '/boletines/boletin-01-intermedio-resuelto/' },
            { label: '🔥 Extras', link: '/boletines/boletin-01-extras/' },
          ],
        },
        {
          label: '🔤 U02 · Sintaxis y tipos de datos',
          link: '/02-sintaxis-tipos-datos/',
        },
        {
          label: '📝 Boletines U02',
          items: [
            { label: '🟢 Inicial', link: '/boletines/boletin-02-inicial/' },
            { label: '✅ Inicial resuelto', link: '/boletines/boletin-02-inicial-resuelto/' },
            { label: '⭐ Intermedio', link: '/boletines/boletin-02-intermedio/' },
            { label: '💪 Intermedio resuelto', link: '/boletines/boletin-02-intermedio-resuelto/' },
            { label: '🔥 Extras', link: '/boletines/boletin-02-extras/' },
          ],
        },
      ],
    }),
  ],
});
