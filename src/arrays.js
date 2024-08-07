// ## For
const redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (let i = 0; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

// ## ForEach
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

// ## Map
const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    return numeroAtual * 2;
})
console.log(dobroDosNumeros);

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'FrontEnd'
    }
})
console.log(alunos2);

// ## Find
const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' // True ou False
}) 
console.log(paula);

// ## FindIndex
const IndiceDaPaula = alunos2.findIndex(function(itemIndice) {
    return itemIndice.nome == 'Paula' // True ou False
}) 
console.log(IndiceDaPaula);

// ## Every
alunos2.push({
    nome: 'Lucio',
    curso: 'BackEnd'
})

const TodosOsAlunosSaoDeFrontEnd = alunos2.every(function(item) {
    return item.curso === 'FrontEnd'
})

console.log(TodosOsAlunosSaoDeFrontEnd);

// ## Some
const existeAlgumAlunoBackEnd = alunos2.some(function(item){
    return item.curso === 'BackEnd' && item.curso === 'FrontEnd';
})
console.log(existeAlgumAlunoBackEnd)

// ## Filter
function filtraAlunosDeBackEnd(alunos) {
    return alunos.curso === 'BackEnd';
}
const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd);
console.log(alunosDeBackEnd);

// ## Reduce
const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)
console.log(soma);

// Segunda forma de fazer so que com FOR
let somaComFor = 0;

for(let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}
console.log(somaComFor);

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome}`;
    return acumulador;
}, '')
console.log(nomeDosAlunos)