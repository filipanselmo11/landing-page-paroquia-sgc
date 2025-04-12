'use client';

export default function Noticias() {
    return (
        <section id="noticias" className="mt-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Notícias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg">Missa especial de Páscoa</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Domingo, 9h - Participe da celebração de Páscoa com a comunidade.
                    </p>
                </article>
                <article className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg">Campanha de arrecadação</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Estamos arrecadando alimentos para famílias em situação de vulnerabilidade.
                    </p>
                </article>
            </div>
        </section>
    );
}