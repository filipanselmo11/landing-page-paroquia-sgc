import Card from "./components/Card";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Noticias from "./components/Noticias";

export default function Home() {

  const versiculoDia = 'O senhor é meu pastor e nada me faltará - Salmos 23:1'

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Bem-vindo à nossa comunidade</h2>
        <p className="text-lg text-gray-700 mb-6">
          Uma igreja acolhedora, de fé e história. Participe de nossas celebrações!
        </p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded transition-transform duration-300 ease-in-out hover:bg-yellow-400 hover:scale-105 cursor-pointer">
          Saiba Mais
        </button>
      </main>
      <Card versiculo={versiculoDia} />
      <Noticias />
      <Contato />
      <Footer />
    </div>
  );
}
