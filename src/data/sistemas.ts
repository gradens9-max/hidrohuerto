import type { Sistema } from "@/types";

export const sistemas: Sistema[] = [
  {
    id: "nft",
    nombre: "NFT (película de nutrientes)",
    descripcion:
      "Una capa fina de agua con nutrientes corre por canales inclinados y moja las raíces de forma continua.",
    ventajas: ["Ideal para hojas verdes", "Usa poca agua", "Fácil de ampliar"],
    desventajas: ["Depende de una bomba", "Si se corta la luz, las raíces se secan rápido"],
    dificultad: "media",
    costoAproximado: "Medio",
  },
  {
    id: "dwc",
    nombre: "DWC (cultivo en agua profunda)",
    descripcion:
      "Las raíces quedan sumergidas en un depósito de agua con nutrientes que se oxigena con una bomba de aire.",
    ventajas: ["Muy sencillo de montar", "Barato para empezar", "Buen crecimiento"],
    desventajas: ["Hay que vigilar la temperatura del agua", "Menos práctico para muchas plantas"],
    dificultad: "baja",
    costoAproximado: "Bajo",
  },
  {
    id: "torres-verticales",
    nombre: "Torres verticales",
    descripcion:
      "Las plantas se colocan en varios niveles y la solución nutritiva cae desde arriba hasta abajo.",
    ventajas: ["Aprovecha muy bien el espacio", "Muchas plantas en poco lugar", "Se ve ordenado"],
    desventajas: ["Montaje más complejo", "Las plantas de arriba reciben más luz que las de abajo"],
    dificultad: "alta",
    costoAproximado: "Alto",
  },
];