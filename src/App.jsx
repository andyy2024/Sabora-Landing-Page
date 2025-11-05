import { motion } from "framer-motion";
import { MapPin, Search, ThumbsUp, Star } from "lucide-react";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight">Sabora</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-purple-300">Features</a>
          <a href="#community" className="hover:text-purple-300">Comunidad</a>
          <a href="#download" className="hover:text-purple-300">Descargar</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Reseñas reales, platos irresistibles 🍽️
          </motion.h2>
          <p className="text-purple-200 mb-8 text-lg">
            Sabora es la app donde encuentras los mejores platos recomendados por gente real. 
            Explora, compara y elige con confianza.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl font-semibold shadow-lg">
              Descargar APK
            </button>
            <button className="bg-white text-purple-800 hover:bg-purple-100 px-6 py-3 rounded-xl font-semibold shadow-lg">
              Escanear en Expo Go
            </button>
          </div>
        </div>

        {/* Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-0"
        >
          <div className="w-64 h-[500px] bg-purple-700 rounded-[2.5rem] shadow-2xl border-4 border-purple-400 flex items-center justify-center">
            <span className="text-purple-300">[Mockup App Aquí]</span>
          </div>
        </motion.div>
      </section>

      {/* Problema y Solución */}
      <section className="bg-purple-900/40 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">¿Por qué Sabora?</h3>
        <p className="max-w-3xl mx-auto text-purple-200">
          Los restaurantes tienen cartas enormes y reviews falsas inundan internet.  
          Sabora te muestra las opiniones más confiables, verificadas por la comunidad, 
          con fotos reales de los platos que probarás.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Explora y descubre</h3>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Feature 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-purple-300">
              <MapPin className="w-6 h-6" />
              <h4 className="text-xl font-semibold">Mapa interactivo</h4>
            </div>
            <p className="text-purple-200">
              Encuentra todos los restaurantes cerca de ti en un mapa detallado.  
              Explora, filtra y descubre nuevos sabores con un solo toque.
            </p>
          </div>
          <div className="w-64 h-[500px] bg-purple-700 rounded-[2.5rem] shadow-xl border-4 border-purple-400 flex items-center justify-center mx-auto">
            <span className="text-purple-300">[Mockup Mapa]</span>
          </div>

          {/* Feature 2 */}
          <div className="w-64 h-[500px] bg-purple-700 rounded-[2.5rem] shadow-xl border-4 border-purple-400 flex items-center justify-center mx-auto md:order-last order-first">
            <span className="text-purple-300">[Mockup Buscador]</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-purple-300">
              <Search className="w-6 h-6" />
              <h4 className="text-xl font-semibold">Buscador avanzado</h4>
            </div>
            <p className="text-purple-200">
              Filtra restaurantes por ubicación, tipo de comida, horario, servicios y más.  
              Encuentra justo lo que quieres, sin perder tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* Comunidad */}
      <section id="community" className="bg-purple-950/40 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">Confiado por la comunidad</h3>
        <p className="max-w-3xl mx-auto text-purple-200 mb-10">
          Cada reseña cuenta con un sistema de <b>karma</b> como en Reddit.  
          Las opiniones más útiles y reales suben, las falsas desaparecen.  
          Sabora es mantenida por personas como tú 🍴
        </p>
        <div className="flex justify-center gap-8 text-purple-300">
          <ThumbsUp className="w-10 h-10" />
          <Star className="w-10 h-10" />
        </div>
      </section>

      {/* Descargar */}
      <section id="download" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Descarga Sabora</h3>
        <p className="text-purple-200 mb-8">Disponible para Android (APK) o en Expo Go para iOS y Android</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl font-semibold shadow-lg">
            Descargar APK
          </button>
          <button className="bg-white text-purple-800 hover:bg-purple-100 px-6 py-3 rounded-xl font-semibold shadow-lg">
            Escanear en Expo Go
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 py-10 text-center text-purple-300 text-sm">
        <p>© {new Date().getFullYear()} Sabora. Todos los derechos reservados.</p>
        <p className="mt-2">Hecho con 💜 por el equipo de Sabora</p>
      </footer>
    </div>
  );
}
