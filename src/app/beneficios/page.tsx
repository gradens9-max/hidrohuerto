const beneficios = [
  { titulo: "Poco espacio", texto: "Se puede cultivar en balcones, terrazas o torres verticales." },
  { titulo: "Menos agua", texto: "El agua se recircula, así que suele gastarse menos que en riego tradicional." },
  { titulo: "Todo el año", texto: "Al controlar luz y nutrientes, depende menos de la estación." },
  { titulo: "Menos tierra", texto: "Sin suelo hay menos malezas y menos trabajo de preparación." },
];

export default function PaginaBeneficios() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-green-800">Beneficios</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {beneficios.map((b) => (
          <article key={b.titulo} className="rounded-xl border border-green-200 bg-white p-4 shadow-sm">
            <h2 className="font-semibold text-green-700">{b.titulo}</h2>
            <p className="mt-1 text-sm text-gray-600">{b.texto}</p>
          </article>
        ))}
      </div>
    </div>
  );
}