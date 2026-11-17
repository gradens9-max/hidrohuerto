"use client";

export default function ErrorCultivos({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="space-y-4 rounded-lg bg-red-50 p-6">
      <h2 className="text-lg font-semibold text-red-700">
        Algo salió mal al cargar los cultivos
      </h2>
      <button
        onClick={reset}
        className="rounded-full bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}