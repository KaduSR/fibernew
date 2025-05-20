"use client";

export function StatsSection() {
  return (
    <section className="bg-white py-12 md:py-16 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              1M<span className="text-primary">+</span>
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 text-center md:text-left">
              Mais de 1400 mil de clientes ativos e satisfeitos.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              1000<span className="text-primary">+</span>
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 text-center md:text-left">
              Está presente em mais de 1000 residências.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              2<span className="text-primary">+</span>
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 text-center md:text-left">
              A Fiber.NET em duas cidades do interior do Rio de Janeiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
