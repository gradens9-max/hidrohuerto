export type CategoriaCultivo = "hojas" | "frutos" | "hierbas";

export type Cultivo = {
  id: string;
  nombre: string;
  categoria: CategoriaCultivo;
  diasACosecha: number;
  phIdeal: string;
  luz: string;
  sistemaRecomendado: string;
  descripcion: string;
};

export type Sistema = {
  id: string;
  nombre: string;
  descripcion: string;
  ventajas: string[];
  desventajas: string[];
  dificultad: "baja" | "media" | "alta";
  costoAproximado: string;
};