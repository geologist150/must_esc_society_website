import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B3C6F]/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">

          <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-[#0B3C6F]">
            Malawi University of Science and Technology
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white md:text-7xl">
            MUST Earth Science Society
          </h1>

          <p className="mt-4 text-xl font-medium text-yellow-400">
            "Make Your Bedrock"
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Empowering Earth Science students through innovation,
            research, leadership, field experiences, and professional
            development.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-[#0B3C6F] transition hover:bg-white"
            >
              Explore Projects
            </Link>

            <Link
              to="/events"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0B3C6F]"
            >
              Upcoming Events
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
