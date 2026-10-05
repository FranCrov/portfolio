export const site = {
  name: "Franco Crovetto",
  firstName: "Franco",
  lastName: "Crovetto",
  brandName: "Crove",
  role: "Full Stack Developer",
  analystTitle: "Analista en Sistemas · En formación",
  location: "Rosario, Argentina",
  email: "francoignacio.crovetto@gmail.com",
  github: "https://github.com/FranCrov",
  linkedin: "https://www.linkedin.com/in/franco-crovetto-1a6992261/",
  cv: "/franco-crovetto-cv.pdf",
  portrait: "/retrato.webp",
  /* Base de todos los URLs de metadata (canonical, OG image, sitemap). Se
     define por entorno para no dejar un dominio supuesto hardcodeado: en Vercel
     cae a la URL real del deploy, y en local al servidor de desarrollo. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
    "http://localhost:3000",
  description:
    "Estudiante de Ingeniería en Sistemas y desarrollador Full Stack. Construyo aplicaciones web de punta a punta, desde la interfaz hasta los datos.",
} as const;