// # Arguments
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }return soma;
}
console.log(somar(10,20));

// # Rest
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}
console.log(somarComRest(10,20,30));

// # Spread
const numeros = [1, 2, 3, 4];
console.log(...numeros)

const timesDeFutebolDeSp = ['Santos', 'Palmeiras', 'São paulo'];
const timesDeFutebolDeRj = ['Botafogo', 'Flamengo', 'Fluminense'];

//const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDeRj);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDeRj];

//timesDeFutebolDeSp.concat(timesDeFutebolDeRj);
console.log(timesDeFutebol)

const carroDaJulia = {
    modelo: 'Gol',
    marca: 'VW',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaJulia);
console.log(carroDaAna);

// # Desestruturação

//const motorDoCarroDaAna = carroDaAna.motor;
const { motor: motorCarroDaAna } = carroDaAna;
const { motor: motorcarroDaJulia } = carroDaJulia;

console.log(motorCarroDaAna);
console.log(motorcarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);