// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Sabora</p>
        <div className="text-sm text-zinc-600 flex items-center gap-3">
          <a href="#" className="hover:text-purple-700">Privacidad</a>
          <a href="#" className="hover:text-purple-700">Términos</a>
          <a href="#download" className="hover:text-purple-700">Descargar</a>
        </div>
      </div>
    </footer>
  );
}
