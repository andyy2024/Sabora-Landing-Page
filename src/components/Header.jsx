// src/components/Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-500" />
          <span className="font-semibold tracking-tight">Sabora</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-purple-700">Características</a>
          <a href="#trust" className="hover:text-purple-700">Confiabilidad</a>
          <a href="#download" className="hover:text-purple-700">Descargar</a>
          <a href="#faq" className="hover:text-purple-700">FAQ</a>
        </nav>
        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-full bg-purple-600 text-white px-4 py-2 text-sm hover:bg-purple-700 transition"
        >
          Descargar APK
        </a>
      </div>
    </header>
  );
}
