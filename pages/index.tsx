import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <Head>
        <title>Telegram Mini App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="w-full p-4 bg-blue-500 text-white text-center">
        <h1 className="text-2xl font-bold">Telegram Mini App</h1>
      </header>

      <main className="flex-grow p-4">
        <p className="text-lg text-gray-700">Добро пожаловать в мини-приложение!</p>
      </main>

      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        <p>© 2025 Mini App, Inc.</p>
        <p className="mt-4 text-lg">
        Узнайте больше о нас на странице <Link href="/about" className="text-blue-500 underline">О нас</Link>.
        </p>
        <p className="mt-4 text-lg">
        Контакты <Link href="/contacts" className="text-blue-500 underline">Контакты</Link>.
        </p>
      </footer>
    </div>
    
  );
}
