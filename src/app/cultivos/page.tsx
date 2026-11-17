import CatalogoCultivos from "@/components/CatalogoCultivos";

export default function PaginaCultivos() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-green-800">Cultivos</h1>
        <p className="mt-1 text-gray-600">
          Busca y filtra las plantas que puedes cultivar en hidroponía.
        </p>
      </header>
      <CatalogoCultivos />
    </div>
  );
}