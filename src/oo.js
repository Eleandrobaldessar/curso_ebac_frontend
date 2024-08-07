// Função construtora modelo antigo
//function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon("Pikachu", "Elétrico")

// Função construtora modelo novo
class Pokemon {
    hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.hp -= 10;
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu','Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com Choque do trovão`)
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;
pikachuDoAsh.atacar();

const pikachu = new Pokemon('Pikachu','Elétrico');
//pikachu.atacar('Choque do trovão')
// pikachu.nome = 'Pikachu';
// pikachu.tipo = 'Elétrico'

console.log(pikachuDoAsh.hp)
console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);