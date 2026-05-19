export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white"></div>

          <h1 className="text-2xl font-bold tracking-tight text-white">
            JobTrack AI
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            About
          </a>

        </div>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
          Login
        </button>

      </div>
    </nav>
  );
}