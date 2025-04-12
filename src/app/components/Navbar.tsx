'use client';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-2xl font-bold">Paróquia São Gabriel Arcanjo</h1>
      <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2 sm:mt-0 text-sm">
        <li><a href="#cardVersiculo" className="hover:underline">Versículo</a></li>
        <li><a href="#noticias" className="hover:underline">Notícias</a></li>
        <li><a href="#contato" className="hover:underline">Contato</a></li>
      </ul>
    </nav>
  );
}
