'use client';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col sm:flex-row items-center gap-6">
      <img
        src="logo-paroquia.svg"
        alt="Logo da Paróquia São Gabriel Arcanjo"
        className="w-36 h-36 object-contain sm:w-28 sm:h-28"
      />
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center sm:text-left">
        Paróquia São Gabriel Arcanjo
      </h1>
      </div>
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0 text-sm sm:text-base">
      <li>
        <a href="#cardVersiculo" className="hover:underline text-base sm:text-lg">
        Versículo
        </a>
      </li>
      <li>
        <a href="#noticias" className="hover:underline text-base sm:text-lg">
        Notícias
        </a>
      </li>
      <li>
        <a href="#contato" className="hover:underline text-base sm:text-lg">
        Contato
        </a>
      </li>
      </ul>
    </nav>
  );
}
