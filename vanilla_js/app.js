function calculo(peso, altura) {
  let result;
  if (altura > 100) {
    altura = altura / 100;
  }
  result = peso / Math.pow(altura, 2);
  if (result > 18.5 && result < 24.9) {
    saida = document.getElementById("resultado").innerText =
      "IMC: " + result.toFixed(2) + ". Você esta dentro do peso Normal.";
  } else {
    saida = document.getElementById("resultado").innerText =
      "IMC: " + result.toFixed(2) + " Você esta fora do peso Normal.";
  }
}

document.getElementById("envio").addEventListener("click", () => {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  calculo(peso, altura);
});
