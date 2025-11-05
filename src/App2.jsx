import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Navbar */}
      <header className="w-full px-8 py-4 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-2xl font-semibold tracking-tight">MiStartup</h1>
        <nav className="flex gap-6 text-gray-600">
          <a href="#features" className="hover:text-gray-900">Características</a>
          <a href="#pricing" className="hover:text-gray-900">Precios</a>
          <a href="#contact" className="hover:text-gray-900">Contacto</a>
        </nav>
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Empezar
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Impulsa tu negocio con tecnología moderna
        </h2>
        <p className="text-lg max-w-2xl text-gray-600 mb-8">
          Una solución sencilla y potente para llevar tu producto al siguiente nivel.
        </p>
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
          Comenzar gratis
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-24 px-8 md:px-16">
        <h3 className="text-3xl font-semibold text-center mb-12">Características principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
            <h4 className="text-xl font-medium mb-3">Diseño adaptable</h4>
            <p className="text-gray-600">
              Optimizado para pantallas de todos los tamaños.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
            <h4 className="text-xl font-medium mb-3">Integración rápida</h4>
            <p className="text-gray-600">
              Conecta tus servicios y APIs fácilmente.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
            <h4 className="text-xl font-medium mb-3">Seguridad avanzada</h4>
            <p className="text-gray-600">
              Protege tus datos con las mejores prácticas actuales.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} MiStartup. Todos los derechos reservados.
      </footer>
    </div>
  );
}
