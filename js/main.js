
function main() {
  const form = document.querySelector('#formulario');

  function handleSubmit(event) {
    event.preventDefault();
    const inputNota1 = event.target.querySelector('#nota1');
    const inputNota2 = event.target.querySelector('#nota2');

    const nota1 = Number(inputNota1.value);
    const nota2 = Number(inputNota2.value);
    
    // Efetuar o calculo da média aqui
    /*
      EX 1: Implementar o cálculo do NOTA
      const media = ????
    */
    const media = 99999

    const notaMensagem = pegarMensagemNOTA(media);

    exibeResultadoNaDiv(notaMensagem);
  }

  form.addEventListener('submit', handleSubmit);
}

main();

function pegarMensagemNOTA(media) {
  
  // Exemplo
  if(media < 4.5) {
    return `Seu NOTA é ${media} Reprovado.`;
  }

  // Aqui você vai implementar a tabela completa de NOTAS
  /*
    EX 2: Implementar a tabela do NOTA conforme exemplo acima
  */
  
  return `Valor ainda não disponível, em desenvolvimento`
}

function exibeResultadoNaDiv(msg) {
  const result = document.querySelector('#resultado');
  result.innerHTML = '';
  const p = document.createElement('p');
  p.classList.add('result-success');
  p.innerHTML = msg;
  result.appendChild(p);
}




