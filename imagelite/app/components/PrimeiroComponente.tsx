'use client';

export function PrimeiroComponente() {

  function clique(){
    alert("Você clicou no botão!");
    //console.log("Você clicou no botão!");
  }
  
  return (
    <div>
      <h1>PrimeiroComponente</h1>
      <button onClick={clique}>Clique aqui!</button>

    </div>
  );
}