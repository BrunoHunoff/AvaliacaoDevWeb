const veiculo = document.getElementById('nomeVeiculo');
const valorVeic = document.getElementById('valor');
const parcelFinal = document.getElementById('valorParcela');

function carro(nome, valor){
    veiculo.innerHTML = nome;
    valorVeic.innerHTML = valor;
}

function calcular(){
    let valorTotal = parseFloat(valorVeic.innerHTML);
    console.log(valorTotal);
    let valorEntrada = document.getElementById('vlrEntrada').value;
    console.log(valorEntrada);
    let parcelas = document.getElementById('parcelas').value;
    let juros = document.getElementById('juros').value;
    juros = juros/100;
    let vlrParcela = 0;

    vlrParcela = (valorTotal - valorEntrada) / parcelas;
    vlrParcela = vlrParcela * (1+juros);

    parcelFinal.innerHTML = vlrParcela;
}