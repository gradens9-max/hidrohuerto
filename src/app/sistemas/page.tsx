import { sistemas } from "@/data/sistemas";

export default function PaginaSistemas() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-green-800">Sistemas hidropónicos</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {sistemas.map((s) => (
          <article key={s.id} className="rounded-xl border border-green-200 bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-green-700">{s.nombre}</h2>
            <p className="mt-2 text-sm text-gray-600">{s.descripcion}</p>
            <p className="mt-3 text-xs text-green-800">
              Dificultad: {s.dificultad} · Costo: {s.costoAproximado}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}