import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome</h1>
        <PrimeiroComponente 
        mensagem = "Esta é a mensagem."
        mensagemBotao="Você clicou no botão!"/>
      </main>
    </div>
  );
}