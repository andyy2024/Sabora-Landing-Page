// src/components/Trust.tsx
export default function Trust() {
  return (
    <section id="trust" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="Karma por reseña"
          text="Cada reseña gana o pierde karma según la utilidad que la comunidad le da, como en Reddit. Mejores reseñas aparecen primero."
        />
        <Card
          title="Fotos reales y verificadas"
          text="Imágenes subidas por usuarios con señales de verificación y controles anti-manipulación. No verás publicidad engañosa."
        />
        <Card
          title="Detección de IA y spam"
          text="Sistemas para identificar reseñas sintéticas, duplicadas o coordinadas. Reportes fáciles y moderación comunitaria."
        />
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-500 mb-4" />
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-zinc-600 text-sm">{text}</p>
    </div>
  );
}
