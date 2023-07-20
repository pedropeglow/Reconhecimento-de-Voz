function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (validaChute(numero)) {
    elementoChute.innerHTML += "<div>Valor Inválido</div>";
  }

  if (numero > maiorValor || numero < menorValor) {
    elementoChute.innerHTML += `<div>Valor Inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
  }
}

function validaChute(numero) {
  Number.isNaN(numero);
  return;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
