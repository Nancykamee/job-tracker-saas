export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        n
        <h1 className="text-2xl font-bold">
          JobTrack AI
        </h1>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-400 transition">
            Features
          </a>

          <a href="#" className="hover:text-gray-400 transition">
            Pricing
          </a>

          <a href="#" className="hover:text-gray-400 transition">
            About
          </a>

          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}