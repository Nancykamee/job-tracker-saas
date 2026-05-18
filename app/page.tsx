// import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    
       <main className="min-h-screen bg-black text-white">
        <Navbar />
        <section className="flex flex-col items-center justify-center text-center px-6 py-32">
          <h1 className="text6xl font-bold max-w-4xl leading-tight">
Track Your Job Applications smarter with AI
          </h1>
<p className="text-gray-400 text-xl mt-6 max-w-2xl">
Organize applications, prepare for interviews, and generate AI-powered cover letters - all in one platform.
</p>
<button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
Get Started
</button>
        </section>
        
    </main>
  );
} 

