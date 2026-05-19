export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-3">
            Login to continue tracking your applications.
          </p>

        </div>

        <form className="space-y-5">

          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/40"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/40"
            />
          </div>

          <button
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <span className="text-white cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>

    </main>
  );
}