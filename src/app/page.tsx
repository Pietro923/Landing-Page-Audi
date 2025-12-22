import Hero from '@/components/Hero';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Sección de modelos destacados */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Modelos destacados</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Desde SUVs versátiles hasta deportivos de alto rendimiento y modelos 100% eléctricos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Modelo 1 */}
            <div className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition">
              <div className="h-80 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-2xl">
                Audi Q5 Sportback
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Audi Q5 Sportback</h3>
                <p className="text-gray-600 mb-6">Diseño coupé con toda la versatilidad de un SUV premium.</p>
                <Link href="/es/modelos/q5-sportback" className="text-black font-semibold hover:underline">
                  Descubrir más →
                </Link>
              </div>
            </div>
            {/* Modelo 2 */}
            <div className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition">
              <div className="h-80 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-2xl">
                Audi e-tron GT
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Audi e-tron GT</h3>
                <p className="text-gray-600 mb-6">El Gran Turismo del futuro. 100% eléctrico.</p>
                <Link href="/es/modelos/e-tron-gt" className="text-black font-semibold hover:underline">
                  Descubrir más →
                </Link>
              </div>
            </div>
            {/* Modelo 3 */}
            <div className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition">
              <div className="h-80 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-2xl">
                Audi RS 3
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Audi RS 3</h3>
                <p className="text-gray-600 mb-6">El compacto deportivo más potente del mundo.</p>
                <Link href="/es/modelos/rs-3" className="text-black font-semibold hover:underline">
                  Descubrir más →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Innovación / e-movilidad */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">El futuro es eléctrico</h2>
            <p className="text-xl text-gray-300 mb-8">
              Con la familia e-tron, Audi lidera la movilidad sostenible sin comprometer performance ni diseño.
            </p>
            <Link
              href="/es/modelos/?byvehicletype=BEV"
              className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition rounded inline-block uppercase tracking-wider"
            >
              Descubrir modelos eléctricos
            </Link>
          </div>
          <div className="bg-gray-800 h-96 border-2 border-dashed border-gray-700 flex items-center justify-center text-3xl text-gray-500">
            Imagen e-tron
          </div>
        </div>
      </section>

      {/* Llamada a acción final */}
      <section className="py-20 px-6 text-center bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Viví la experiencia Audi</h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Encontrá tu concesionario oficial y agendá un test drive para sentir el progreso en movimiento.
          </p>
          <Link
            href="/es/concesionarios/red-de-concesionarios"
            className="bg-black text-white px-10 py-5 text-lg font-medium hover:bg-gray-800 transition rounded uppercase tracking-wider inline-block"
          >
            Encontrar concesionario
          </Link>
        </div>
      </section>
    </main>
  );
}