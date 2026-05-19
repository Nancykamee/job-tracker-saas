import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <section className="relative flex flex-col items-center justify-center text-center px-6 py-36">

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black"></div>

        <div className="relative z-10 max-w-5xl">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
            AI-Powered Career Management
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Track Job Applications Like a Modern Professional
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Organize applications, monitor interviews, manage opportunities, and generate AI-assisted career documents — all in one intelligent platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
              Start Tracking
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
              Watch Demo
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}