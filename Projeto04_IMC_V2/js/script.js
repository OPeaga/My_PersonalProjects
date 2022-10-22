function start() {
  var ButtonCalculateImc = document.querySelector("#button-calculate-imc");
  /* document.querySelector nos leva a id que colocamos lá em nosso HTML de nome #button-calculate-imc */
  ButtonCalculateImc.addEventListener("click", handleButtonClick);
  /* addeventlistener é uma opção de DOM em JS que nos permite ter um sinal do tipo click e trazer uma reação a esse sinal */

  var inputWeight = document.querySelector("#input_weight");
  var inputHeight = document.querySelector("#input_height");

  inputWeight.addEventListener("input", handleButtonClick);
  inputHeight.addEventListener("input", handleButtonClick);

  handleButtonClick();
  /* handlebuttonclick é a função de "reação" que no caso, queremos um IMC calculado em tempo hábil */
}
function calculate_imc(weight, height) {
  return weight / (height * height);
}
function handleButtonClick() {
  var inputWeight = document.querySelector("#input_weight");
  var inputHeight = document.querySelector("#input_height");
  var imc_result = document.querySelector("#imc-result");
  var imc_type = document.querySelector("#imc-type");

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  var imc = calculate_imc(weight, height);
  var formattedImc = imc.toFixed(2).replace(".", ",");
  /* tofixed() seleciona um delimitador em quantidade para após o separador decimal, replace ("Trocar isso" por,"Isso aqui") */

  imc_result.textContent = formattedImc;
  /* textcontent nos remete ao conteúdo em branco lá no HTML e lá colcamos o valor de formattedImc */
  imc_type.textContent = ValidateIMC(imc);
}
function ValidateIMC(imc) {
  if (imc > 15.99 && imc <= 16.99) {
    return "Muito abaixo do peso";
  }
  if (imc > 16.99 && imc <= 18.49) {
    return "Abaixo do peso";
  }
  if (imc > 18.49 && imc <= 24.99) {
    return "Peso Normal";
  }
  if (imc > 24.99 && imc <= 29.99) {
    return "Acima do Peso";
  }
  if (imc > 29.99 && imc <= 34.99) {
    return "Obesidade Grau 1";
  }
  if (imc > 34.99 && imc <= 40) {
    return "Obesidade Grau 2";
  }
  if (imc > 40) {
    return "Obesidade Grau 3";
  } else {
    return "Valor Inválido";
  }
}
start();
