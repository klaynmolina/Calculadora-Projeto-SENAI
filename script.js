const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const operacao = document.getElementById('operacao');
const resultado = document.getElementById('resultado');

function Calcular() {
    let calculo;
    switch (operacao.value) {
        case '*':
            calculo = parseFloat(valor1.value) * parseFloat(valor2.value);
            break;
        case '/':
            calculo = parseFloat(valor1.value) / parseFloat(valor2.value);
            break;
        case '-':
            calculo = parseFloat(valor1.value) - parseFloat(valor2.value);
            break;
        case '+':
            calculo = parseFloat(valor1.value) + parseFloat(valor2.value);
            break;
    }
    resultado.innerHTML = `${calculo.toFixed(2)}`;
}