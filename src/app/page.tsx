import Link from "next/link";
import { cultivos } from "@/data/cultivos";

export default function Inicio() {
  const destacados = cultivos.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-green-600 px-6 py-12 text-white">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Cultiva sin tierra, desde casa
        </h1>
        <p className="mt-3 max-w-2xl text-green-50">
          La hidroponía cultiva plantas con agua y nutrientes en lugar de suelo.
          Aquí encontrarás cultivos para empezar y los sistemas más comunes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/cultivos"
            className="rounded-full bg-white px-5 py-2 font-medium text-green-700 hover:bg-green-100"
          >
            Ver cultivos
          </Link>
          <Link
            href="/sistemas"
            className="rounded-full border border-white px-5 py-2 font-medium hover:bg-green-700"
          >
            Ver sistemas
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-green-800">
          Cultivos destacados
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {destacados.map((cultivo) => (
            <Link
              key={cultivo.id}
              href={`/cultivos/${cultivo.id}`}
              className="rounded-xl border border-green-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-green-700">
                {cultivo.nombre}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{cultivo.descripcion}</p>
              <p className="mt-3 text-xs text-green-800">
                Cosecha en ~{cultivo.diasACosecha} días
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}