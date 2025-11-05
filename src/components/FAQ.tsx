// src/components/FAQ.tsx
export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-3xl font-semibold text-center">Preguntas frecuentes</h2>
      <div className="mt-8 space-y-4">
        <Item q="¿La app es gratuita?">
          Sí, es gratuita y se sostiene con anuncios. No hay suscripciones.
        </Item>
        <Item q="¿Cómo garantizan reseñas confiables?">
          Usamos karma por reseña, verificación de fotos reales y señales anti-IA y anti-spam.
        </Item>
        <Item q="¿Por qué Sabora en lugar de Google?">
          Centralizamos la información, priorizamos fotos y reseñas por plato y ofrecemos filtros avanzados globales.
        </Item>
        <Item q="¿iOS está soportado?">
          Puedes probarla con Expo Go mediante código QR. Publicación en tiendas llegará más adelante.
        </Item>
      </div>
    </section>
  );
}

function Item({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border p-4 open:bg-purple-50/40">
      <summary className="cursor-pointer list-none flex items-center justify-between">
        <span className="font-medium">{q}</span>
        <span className="text-zinc-500 group-open:rotate-180 transition">⌄</span>
      </summary>
      <div className="mt-2 text-sm text-zinc-600">{children}</div>
    </details>
  );
}
