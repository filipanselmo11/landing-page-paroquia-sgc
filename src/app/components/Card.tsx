'use client';

interface CardProps {
    versiculo: string
}

export default function Card({ versiculo }: CardProps) {
    return (
        <section className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mt-10">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Versículo do Dia
            </h3>
            <p className="text-gray-800 italic">
                {versiculo}
            </p>
        </section>
    );
}