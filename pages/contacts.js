export default function ContactsPage() {
  return (
<div class="relative">
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
        <div class="flex gap-8 my-11">
          <div class="h-24 w-24 overflow-hidden rounded-full ring-2 ring-gray-700 dark:ring-gray-100">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1f6HIrAeyGfxu4Z70NaRf9bT1qviNuwqudw&s" alt="" class="w-full h-full object-cover"/>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-6">
          <a class="relative" href="#">
              <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">more pisechek</span>
          </a>
          <a href="#" class="relative">
              <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
              <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">more petushkov</span>
          </a>
      </div>
    </div>
    <div
        class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
      <div class="relative flex justify-center h-[520px] w-[250px] border border-4 border-black rounded-2xl"
          styles="box-shadow: 10px 10px 5px 12px rgb(209, 218, 218)">
          <span class="border border-black bg-black w-16 h-4 mt-2 rounded-full"></span>

          <span class="absolute -right-1.5 top-20 border border-2 border-black h-10 rounded-md"></span>

          <span class="absolute -left-1.5 top-16 border border-2 border-black h-6 rounded-md"></span>
          <span class="absolute -left-1.5 top-32 border border-2 border-black h-12 rounded-md"></span>
          <span class="absolute -left-1.5 top-48 border border-2 border-black h-12 rounded-md"></span>
          <img 
            src="https://preview.redd.it/dandadan-wallpapers-v0-8oll6z44r0td1.jpeg?width=945&format=pjpg&auto=webp&s=420e245700ada1138d2b7b3d3c341e20dc9cbc13" 
            alt="Ваше фото" 
            class="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
    <div
        class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 class="text-4xl font-bold">The Third slide</h2>
        <p class="mt-2">Scroll Down</p>
    </div>
    <div
        class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
        <h2 class="text-4xl font-bold">The Fourth slide</h2>
    </div>
</div>
  );
}
