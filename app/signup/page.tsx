"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Link from "next/link";
import Input from "../components/Input";
export default function SignupPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold">
            Create Account
          </h1>

          <p className="text-gray-400 mt-3">
            Start managing your job applications intelligently.
          </p>

        </div>

        <form className="space-y-5">

          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
          />

          <Input
            label="Email"
            type="email"
            placeholder="email@email.com"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create password"
          />
<Button onClick={() => router.push("/dashboard")}>
  Create Account
</Button>

        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}