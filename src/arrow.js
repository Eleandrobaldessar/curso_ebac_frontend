// ## Primeira forma
const minhaFuncaoA = () => {
    return "Diz olá A";
}
console.log(minhaFuncaoA());

// ## Segunda forma
const minhaFuncaoB = () => "Diz olá B";
console.log(minhaFuncaoB());

// ## Terceira forma com Objeto
const retornaUmCarro = () => ({
    modelo: 'Ká',
    fabricante: 'Ford'
})
console.log(retornaUmCarro());

// ## Quarta forma com função
const carro = {
    velocidadeAtual: 40,
    acelerar: function(){
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);