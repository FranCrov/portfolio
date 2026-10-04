export type JourneyEntry = {
  period: string;
  title: string;
  context: string;
  description: string;
};

export const journey: JourneyEntry[] = [
  {
    period: "2023 – actualidad",
    title: "Ingeniería en Sistemas",
    context: "Universidad Abierta Interamericana · Rosario",
    description:
      "Estudiante de cuarto año de la carrera en la Universidad Abierta Interamericana.",
  },
  {
    period: "Tercer año",
    title: "Trabajo de Diploma · SmartCloth Logistics",
    context: "Proyecto académico · equipo de cuatro estudiantes",
    description:
      "Proyecto anual para la materia Trabajo de Diploma, como parte del trayecto hacia el título intermedio de Analista en Sistemas Informáticos.",
  },
  {
    period: "En desarrollo",
    title: "Plásticos RT",
    context: "Sitio institucional y catálogo",
    description:
      "Desarrollo de una web para presentar la empresa, su equipo, productos y vías de contacto.",
  },
];
