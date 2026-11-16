import type { Cultivo } from "@/types";

// Valores aproximados, pensados como guía general para principiantes.
export const cultivos: Cultivo[] = [
  {
    id: "lechuga",
    nombre: "Lechuga",
    categoria: "hojas",
    diasACosecha: 40,
    phIdeal: "5.5 - 6.5",
    luz: "Luz media, 12 a 14 horas",
    sistemaRecomendado: "NFT",
    descripcion:
      "Una de las plantas más fáciles para empezar. Crece rápido y no necesita mucho espacio.",
  },
  {
    id: "albahaca",
    nombre: "Albahaca",
    categoria: "hierbas",
    diasACosecha: 30,
    phIdeal: "5.5 - 6.5",
    luz: "Luz alta, 14 a 16 horas",
    sistemaRecomendado: "DWC",
    descripcion:
      "Aromática y agradecida. Se puede cosechar por hojas varias veces antes de que florezca.",
  },
  {
    id: "espinaca",
    nombre: "Espinaca",
    categoria: "hojas",
    diasACosecha: 40,
    phIdeal: "6.0 - 7.0",
    luz: "Luz media, 10 a 12 horas",
    sistemaRecomendado: "NFT",
    descripcion:
      "Prefiere ambientes frescos. Con buena ventilación da hojas tiernas en poco tiempo.",
  },
  {
    id: "fresa",
    nombre: "Fresa",
    categoria: "frutos",
    diasACosecha: 75,
    phIdeal: "5.5 - 6.2",
    luz: "Luz alta, 12 a 14 horas",
    sistemaRecomendado: "Torres verticales",
    descripcion:
      "Rinde mucho en torres verticales. Requiere más paciencia, pero es muy vistosa.",
  },
  {
    id: "tomate-cherry",
    nombre: "Tomate cherry",
    categoria: "frutos",
    diasACosecha: 70,
    phIdeal: "5.8 - 6.3",
    luz: "Luz muy alta, 14 a 16 horas",
    sistemaRecomendado: "DWC",
    descripcion:
      "Necesita tutores para crecer y mucha luz. Es un cultivo exigente pero muy gratificante.",
  },
  {
    id: "menta",
    nombre: "Menta",
    categoria: "hierbas",
    diasACosecha: 35,
    phIdeal: "5.5 - 6.5",
    luz: "Luz media, 12 a 14 horas",
    sistemaRecomendado: "NFT",
    descripcion:
      "Crece con muchísima fuerza. Conviene tenerla en su propio recipiente para que no invada a las demás.",
  },
  {
    id: "cilantro",
    nombre: "Cilantro",
    categoria: "hierbas",
    diasACosecha: 35,
    phIdeal: "6.0 - 6.7",
    luz: "Luz media, 10 a 12 horas",
    sistemaRecomendado: "DWC",
    descripcion:
      "Prefiere temperaturas suaves. Si hace demasiado calor, tiende a florecer rápido.",
  },
  {
    id: "pepino",
    nombre: "Pepino",
    categoria: "frutos",
    diasACosecha: 60,
    phIdeal: "5.5 - 6.0",
    luz: "Luz alta, 14 a 16 horas",
    sistemaRecomendado: "Torres verticales",
    descripcion:
      "Trepador de crecimiento rápido. Necesita soporte y bastante agua para dar buenos frutos.",
  },
];