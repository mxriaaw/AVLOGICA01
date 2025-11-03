function calcularMedia() {
  const inputs = document.querySelectorAll("#inputs input");
  let soma = 0;

  for (let i = 0; i < inputs.length; i++) {
    let valor = parseFloat(inputs[i].value);
    if (isNaN(valor) || valor < 0 || valor > 10) {
      alert("Por favor, preencha todas as notas com valores entre 0 e 10.");
      return;
    }
    soma += valor;
  }

  const media = soma / inputs.length;
  const resultado = document.getElementById("resultado");

  resultado.textContent = `Média: ${media.toFixed(2)} `;

  if (media < 7) {
    resultado.style.color = "red";
    resultado.textContent += "- REPROVOU";
  } else if (media === 10) {
    resultado.style.color = "black";
    resultado.textContent += "-";
  } else {
    resultado.style.color = "green";
    resultado.textContent += "- PASSOU";
  }
}
