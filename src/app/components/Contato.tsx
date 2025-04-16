'use client';

export default function Contato() {
    return (
        <section className="mt-16 px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Contato</h2>
            <p className="text-blue-700 mb-6">Entre em contato conosco pelo WhatsApp ou envie um e-mail.</p>
            <div className="flex justify-center gap-6 flex-wrap">
                <a
                    href="https://wa.me/SEUNUMERO"
                    className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
                    target="_blank"
                >
                    WhatsApp
                </a>
                <a
                    href="mailto:seuemail@paroquia.com"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                >
                    E-mail
                </a>
            </div>
        </section>
    );
}