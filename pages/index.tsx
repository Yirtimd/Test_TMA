import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (

<div className="h-screen w-screen bg-black flex justify-center items-center">

  <div className="relative inline-flex  group">
      <div
          className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
      </div>
      <a href="/contacts" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Get it now
      </a>
  </div>
</div>



  );
}

//     <p className="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
// <Link href="/contacts">
// <span>
   // View More
// </span>
// <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
   // viewBox="0 0 24 24">
    //<path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//</svg>
//</Link>.
//</p>
//       <Link href="/contacts"></Link>