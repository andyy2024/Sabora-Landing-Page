// src/components/HowItWorks.tsx
export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-semibold text-center">Cómo funciona</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <Step n={1} title="Explora el mapa" text="Abre el mapa y descubre restaurantes cercanos con platos populares." />
        <Step n={2} title="Filtra y compara" text="Usa filtros avanzados para encontrar justo lo que quieres probar." />
        <Step n={3} title="Confía en la comunidad" text="Mira fotos verificadas y reseñas con más karma primero." />
      </div>
    </section>
  );
}

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="h-8 w-8 grid place-items-center rounded-full bg-purple-100 text-purple-700 font-semibold">{n}</div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{text}</p>
    </div>
  );
}
