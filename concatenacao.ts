function concatenarString(nome1: string, nome2: string, espacoVazio: string):string {
    return nome1 + espacoVazio + nome2;
}

const resultado = concatenarString('Eleandro ','baldessar', ' ');
console.log(resultado);