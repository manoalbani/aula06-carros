// Object

let carro = {
    marca:"vw",
    ano: 2023,
    cor:"Preto"
};

console.log(carro);

console.log(carro.cor);


// let placa = prompt('Digite a placa');
// let cor = prompt('Digite a cor');
// let ano = prompt('Digite o ano');

// let carro2 = {
//     placa,
//     cor:cor,
//     ano,
// }

// console.log(carro2);

let carros = [];

function cadastrarCarro(){
    let placa = prompt('Digite a placa');
    let cor = prompt('Digite a cor');
    let ano = prompt('Digite o ano');
    
    let novoCarro = {
        placa,
        cor:cor,
        ano,
    }  
    carros.push(novoCarro);
    executarMenu();
}

function pesquisarCarro(){
    let placa = prompt('Digite a placa do carro');
    let carro = carros.find(x=>x.placa==placa);
    if(carro){
        console.log(`
            Placa: ${carro.placa}
            Ano: ${carro.ano}
            Cor: ${carro.cor}`);
    } else{
        console.log('Carro não encontrado');
    }

    


    executarMenu();
}

// cadastrarCarro();
// console.log(carros);
// console.log(carros[0].placa);

function executarMenu(){
    let acao = prompt(`
        (1) cadastrar veiculo
        (2) pesquisar veiculo
        (3) sair
    `)
    switch (acao) {
        case "1":
            cadastrarCarro();
            break;
        case "2":
            pesquisarCarro();
            break;
        default:
            break;
    }
}

executarMenu();