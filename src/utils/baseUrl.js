// src/utils/baseUrl.js
export function baseUrl(path) {
    const basePath = '/astro-bento-portfolio-ssg'; // Set your base path here
    return `${basePath}${path}`;
  }

// src/utils/baseUrl.js
// import { getConfig } from 'astro/config';

// export function baseUrl(path) {
//   const { base } = getConfig();
//   return `${base}${path}`;
// }