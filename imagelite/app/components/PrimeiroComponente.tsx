'use client';

interface PrimeiroComponenteProps {
  //defina as propriedades do componente aqui, se necessário
  mensagem: string;
  mensagemBotao: string; // Propriedade opcional
}

export const PrimeiroComponente = ({ mensagem, mensagemBotao }: PrimeiroComponenteProps) => {

  /* function clique(){
    alert("Você clicou no botão!");
    console.log("Você clicou no botão!");
  } */

  //array
  const clique = () => {
    alert(mensagemBotao);
  }

  return (
    <div>
      <h1>PrimeiroComponente</h1>
      <p>{mensagem}</p>
      <button onClick={clique}>Clique aqui!</button>

    </div>
  );
}