'use client';

export default function Footer() {
    return (
        <footer className="bg-blue-700 text-white mt-20 p-6 text-center">
            <p>&copy; {new Date().getFullYear()} Paróquia São Gabriel Arcanjo. Todos os direitos reservados.</p>
        </footer>
    );
}