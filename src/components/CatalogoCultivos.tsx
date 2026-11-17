"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Cultivo, CategoriaCultivo } from "@/types";

type Filtro = "todas" | CategoriaCultivo;

const filtros: { valor: Filtro; texto: string }[] = [
  { valor: "todas", texto: "Todas" },
  { valor: "hojas", texto: "Hojas" },
  { valor: "frutos", texto: "Frutos" },
  { valor: "hierbas", texto: "Hierbas" },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export default function CatalogoCultivos() {
  const [cultivos, setCultivos] = useState<Cultivo[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState<Filtro>("todas");

  useEffect(() => {
    let cancelado = false;
    const query = filtro === "todas" ? "" : `?categoria=${filtro}`;

    fetch(`${API_URL}/api/cultivos${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudieron cargar los cultivos");
        return res.json() as Promise<Cultivo[]>;
      })
      .then((datos) => {
        if (!cancelado) {
          setCultivos(datos);
          setError(null);
        }
      })
      .catch((e: Error) => {
        if (!cancelado) setError(e.message);
      })
      .finally(() => {
        if (!cancelado) setCargando(false);
      });

    return () => {
      cancelado = true;
    };
  }, [filtro]);

  function cambiarFiltro(nuevo: Filtro) {
    setFiltro(nuevo);
    setCargando(true);
  }

  const texto = busqueda.trim().toLowerCase();
  const visibles = cultivos.filter((c) =>
    c.nombre.toLowerCase().includes(texto)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar cultivo..."
          className="w-full rounded-full border border-green-300 bg-white px-4 py-2 text-sm outline-none focus:border-green-600 sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          {filtros.map((f) => (
            <button
              key={f.valor}
              onClick={() => cambiarFiltro(f.valor)}
              className={`rounded-full px-4 py-1 text-sm font-medium transition ${
                filtro === f.valor
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-800 hover:bg-green-100"
              }`}
            >
              {f.texto}
            </button>
          ))}
        </div>
      </div>

      {cargando && <p className="text-green-800">Cargando cultivos...</p>}

      {error && !cargando && (
        <p className="rounded-lg bg-red-50 p-4 text-red-700">{error}</p>
      )}

      {!cargando && !error && visibles.length === 0 && (
        <p className="text-gray-600">No hay cultivos que coincidan.</p>
      )}

      {!cargando && !error && visibles.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((cultivo) => (
            <Link
              key={cultivo.id}
              href={`/cultivos/${cultivo.id}`}
              className="rounded-xl border border-green-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-green-700">
                  {cultivo.nombre}
                </h3>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                  {cultivo.categoria}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{cultivo.descripcion}</p>
              <p className="mt-3 text-xs text-green-800">
                Cosecha en ~{cultivo.diasACosecha} días · {cultivo.sistemaRecomendado}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}