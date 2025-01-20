import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
      </footer>
    </div>
  );
}
