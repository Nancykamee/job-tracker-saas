"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button"
import Link from "next/link";
import Input from "../components/Input";
export default function LoginPage() {
  const router = useRouter();
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

          <Input
            label="Email"
            type="email"
            placeholder="email@email.com"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
          />
<Button onClick={() => router.push("/dashboard")}>
  Login
</Button>
        
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-white hover:underline"
          >
            Sign up
          </Link>
        </p>

      </div>

    </main>
  );
}