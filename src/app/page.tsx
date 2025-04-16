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

      <main
        className="max-w-9xl mx-auto p-6 sm:p-12 text-center bg-cover bg-center min-h-[800px] sm:min-h-[1000px]"
        style={{ backgroundImage: "url('igreja-matriz-sgc.jpg')" }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Bem-vindo à nossa comunidade</h2>
        <p className="text-base sm:text-lg text-blue-800 mb-6">
          Uma igreja acolhedora, de fé e história. Participe de nossas celebrações!
        </p>
        <button className="bg-yellow-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded transition-transform duration-300 ease-in-out hover:bg-yellow-400 hover:scale-105 cursor-pointer">
          Saiba Mais
        </button>
        <Card versiculo={versiculoDia} />
        <Noticias />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
