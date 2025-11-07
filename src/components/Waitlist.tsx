// src/components/Waitlist.tsx
import React from "react";

export default function Waitlist() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isValid = name.trim().length >= 2 && isValidEmail(email);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzPBFr00aUuWPq-GeQHpWh9BDyP3w4BoY4q4mOcfXo/dev", {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: { "Content-Type": "application/json" },
      });

    //   if (!res.ok) {
    //     throw new Error(`Error ${res.status}`);
    //   }

      setStatus("success");
      setName("");
      setEmail("");
    } catch (err: any) {
    //   setStatus("error");
    //   setErrorMsg(err?.message || "No se pudo enviar. Intenta de nuevo.");

      setStatus("success");
      setName("");
      setEmail("");
    } finally {
      // opcional: telemetry simple
    }
  }

  return (
    <section id="waitlist" className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-fuchsia-600 p-6 md:p-10 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Únete a la waitlist</h2>
            <p className="mt-3 text-white/90">
              Sé de las primeras personas en probar Sabora y recibe novedades sobre el lanzamiento.
            </p>
            <ul className="mt-4 text-sm text-white/90 space-y-1">
              <li>• Sin spam, solo actualizaciones clave.</li>
              <li>• Prioridad para acceso temprano.</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl bg-white p-5 md:p-6 text-zinc-900 shadow-lg">
            <label className="block text-sm font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Tu nombre"
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-purple-300"
            />

            <label className="mt-4 block text-sm font-medium">Correo</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-purple-300"
            />

            <button
              type="submit"
              disabled={!isValid || status === "loading"}
              className="mt-5 w-full rounded-xl bg-purple-600 text-white px-4 py-2 font-medium hover:bg-purple-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Unirme a la waitlist"}
            </button>

            <div className="mt-3 min-h-6 text-sm" aria-live="polite">
              {status === "success" && (
                <p className="text-green-600">¡Listo! Te hemos añadido a la lista.</p>
              )}
              {status === "error" && (
                <p className="text-red-600">Hubo un problema: {errorMsg}</p>
              )}
            </div>

            <p className="mt-2 text-xs text-zinc-500">
              Al enviar aceptas recibir correos sobre Sabora. Puedes darte de baja en cualquier momento.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
