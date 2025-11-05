// src/components/Features.tsx
import PhoneMock from "./PhoneMock";

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold">Características principales</h2>
        <p className="mt-3 text-zinc-600">
          Encuentra el plato perfecto sin adivinar: mapa cercano y buscador con filtros avanzados.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Mapa de restaurantes</h3>
          <p className="text-zinc-600">
            Ve todos los restaurantes cerca de tu ubicación, con rating por plato y fotos reales subidas por la comunidad.
          </p>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700">
            <li>• Vista de proximidad con indicación de platos destacados.</li>
            <li>• Datos centralizados y actualizados por la comunidad.</li>
            <li>• Sin publicidad engañosa: fotos verificadas.</li>
          </ul>
        </div>
        <PhoneMock label="Mockup: Mapa">
          {/* <MapPlaceholder /> */}
          <img
              src={"./mockup2.jpg"}
              alt="App screenshot"
              className="w-full h-full object-fill rounded-[32px]"
            />
        </PhoneMock>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-10 items-start">
        <PhoneMock label="Mockup: Buscador">
          <SearchPlaceholder />
        </PhoneMock>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Buscador con filtros</h3>
          <p className="text-zinc-600">
            Filtra por ubicación, servicios, precio, horarios, tipo de comida y rating. Encuentra el plato, no solo el lugar.
          </p>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700">
            <li>• Filtros combinables y búsqueda global.</li>
            <li>• Resultados por plato con reputación de la reseña.</li>
            <li>• Transparencia: señales contra reseñas generadas por IA.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function MapPlaceholder() {
  return (
    <div className="h-full w-full bg-zinc-50">
      <div className="h-10 border-b flex items-center px-3 gap-2">
        <div className="h-6 w-24 rounded bg-zinc-200" />
        <div className="h-6 w-16 rounded bg-zinc-200" />
      </div>
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-3 gap-2 p-3">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="rounded bg-purple-200/50 border border-purple-200" />
        ))}
      </div>
    </div>
  );
}

function SearchPlaceholder() {
  return (
    <div className="h-full w-full bg-white">
      <div className="p-3 border-b">
        <div className="h-10 rounded-xl bg-zinc-100 border flex items-center px-3 text-zinc-400">
          Buscar platos, restaurantes...
        </div>
      </div>
      <div className="p-3 space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl border p-3">
            <div className="h-4 w-1/2 bg-zinc-100 rounded" />
            <div className="mt-2 h-3 w-1/3 bg-zinc-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
