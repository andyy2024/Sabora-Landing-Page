// src/components/Download.tsx
export default function Download() {
  return (
    <section id="download" className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Instala Sabora hoy</h2>
            <p className="mt-3 text-white/90">
              Descarga el APK para Android o escanea el código QR para abrir en Expo Go en Android o iOS.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/sabora.apk"
                className="rounded-full bg-white text-purple-700 px-5 py-3 text-sm font-medium hover:bg-purple-50 transition"
                download
              >
                Descargar APK
              </a>
              <a
                href="#qr"
                className="rounded-full border border-white/30 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                Abrir en Expo Go
              </a>
            </div>
            <p className="mt-2 text-xs text-white/80">No disponible aún en App Store o Play Store.</p>
          </div>

          <div id="qr" className="flex items-center justify-center">
            <div className="rounded-2xl bg-white p-4 shadow-lg">
              <img
                src="./QR.png"
                alt="QR de Expo Go"
                className="h-44 w-44 rounded-lg object-contain"
              />
              <p className="mt-2 text-center text-xs text-purple-700">
                QR de Expo Go
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
