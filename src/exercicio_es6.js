// media para necessaria
const mediaNecessaria = 6;

// array de objetos
const NotasDosAlunos = [
    {
        nome:'Pedro',
        nota: 6
    },
    {
        nome:'João',
        nota: 7
    },
    {
        nome:'Maria',
        nota: 9
    },
    {
        nome:'Joana',
        nota: 10
    },
    {
        nome:'Caze',
        nota: 2
    }
];

const maioresOuIguais = NotasDosAlunos
//filter: seleciona apenas os alunos cujas notas são maiores ou iguais à média necessária
.filter(alunos => alunos.nota >= mediaNecessaria)
//map: retorna os nomes dos alunos
.map(alunos => alunos.nome);

console.log(NotasDosAlunos);
console.log(maioresOuIguais); 