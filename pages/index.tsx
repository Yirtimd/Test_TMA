import Head from 'next/head';
import Link from "next/link";


export default function Home() {
  return (
<div className="h-screen w-screen bg-white flex flex-col justify-center items-center">

    {/* Кнопка с градиентным эффектом */}
    <div className="relative inline-flex group">
        <div
            className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <a 
            href="/contacts" 
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" 
            role="button"
        >
            Get it now
        </a>
    </div>
</div>
  );
}
