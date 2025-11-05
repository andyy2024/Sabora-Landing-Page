// src/components/Hero.tsx
import PhoneMock from "./PhoneMock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 -top-24 -z-10 blur-3xl">
        <div className="mx-auto h-64 w-2/3 rounded-full bg-purple-300/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Reseñas reales de platos, cerca de ti.
          </h1>
          <p className="mt-4 text-zinc-600">
            Sabora es la app tipo “letterbox” para restaurantes: descubre qué plato pedir con fotos verificadas y reseñas
            con karma. Gratis, sin suscripciones, sustentada con anuncios.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="rounded-full bg-purple-600 text-white px-5 py-3 text-sm font-medium hover:bg-purple-700 transition"
            >
              Descargar APK
            </a>
            <a
              href="#download"
              className="rounded-full border border-purple-200 text-purple-700 px-5 py-3 text-sm font-medium hover:bg-purple-50 transition"
            >
              Abrir en Expo Go
            </a>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Aún no disponible en App Store o Play Store.
          </p>
        </div>

        <div className="flex justify-center">
          <PhoneMock label="Sabora">
            <img
              src={"./mockup1.jpg"}
              alt="App screenshot"
              className="w-full h-full object-fill rounded-[32px]"
            />
          </PhoneMock>
        </div>
      </div>
    </section>
  );
}
