export type JourneyEntry = {
  period: string;
  title: string;
  context: string;
  description: string;
};

export const journey: JourneyEntry[] = [
  {
    period: "2023",
    title: "Ingeniería en Sistemas",
    context: "Universidad Abierta Interamericana · Rosario",
    description:
      "Primer año de la carrera. Arranque con los fundamentos de programación y bases de datos que después sostienen cada uno de los proyectos siguientes.",
  },
  {
    period: "2024",
    title: "Bases de datos · Biblioteca Dashboard",
    context: "Trabajo práctico individual",
    description:
      "Segundo año. Panel de reservas con reportes de ventas y rentabilidad, construido sobre MySQL y Prisma.",
  },
  {
    period: "2025",
    title: "Trabajo de Diploma · SmartCloth Logistics",
    context: "Trabajo práctico en equipo con Teo Fassardi",
    description:
      "Tercer año. Proyecto anual de la materia Trabajo de Diploma: plataforma de comercio electrónico con ventas, inventario y distribución. Cada integrante desarrolló una parte del sistema.",
  },
  {
    period: "2026",
    title: "Plásticos RT",
    context: "Sitio institucional y catálogo",
    description:
      "Cuarto año. Desarrollo en curso de una web para presentar la empresa, su equipo, productos y vías de contacto.",
  },
];