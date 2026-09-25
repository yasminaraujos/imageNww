import Link from "next/link";
import { PrimeiroComponente } from "./components/PrimeiroComponente";
import { Template } from './components';

export default function Home() {
  return (
    <Template>
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-900 to-black text-white flex items-center justify-center">
      <main className="flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-8xl font-extrabold tracking-tight text-[#f9a8d4] drop-shadow-[0_0_12px_rgba(249,168,212,0.7)]">
          Welcome
        </h1>

        <PrimeiroComponente mensagem="Hello world" mensagemBotao="Clicou!" />

        <Link
          href="/galeria"
          className="mt-4 px-6 py-3 rounded-lg font-bold uppercase tracking-wide
                     bg-purple-400 border-[#39ff14] text-white
                     shadow-[0_0_10px_rgba(57,255,20,0.6)]
                     hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(57,255,20,0.9)]
                     transition-all duration-300"
        >
          Ir para Galeria
        </Link>
      </main>
    </div>
    </Template>
  );
}