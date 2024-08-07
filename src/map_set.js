let meuMap = new Map();
meuMap.set("Nome", "Gian");
meuMap.set("Stack", "HTML, CSS e JS");

// Recuperar valor do item
const nome = meuMap.get("Nome");

console.log(meuMap);
console.log(nome);

// Recuperar quantidade de itens
console.log(meuMap.size);

// Determinar se uma chave existe dentro de um map
console.log(meuMap.has("Nome"));

// Limpar os itens do map
//meuMap.clear()
//console.log(meuMap.size)

// FOR com map
// Recuperar as chaves
for (let chave of meuMap.keys()) {
    console.log(chave);
}

// Recuperar os valores
for (let valor of meuMap.values()) {
    console.log(valor);
}

// Recupera os itens do map e transforma em tabela
for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// Remover itens do map
meuMap.delete("Stack");
console.log(meuMap);

// SET
const cpfs = new Set();

cpfs.add('66057219007')
cpfs.add('14037324008')
cpfs.add('85258568008')

console.log(cpfs)

// SET com forEach
cpfs.forEach((valor) => {
    console.log(valor);
})

// Remover itens duplicados de um array
const array = ['Gian Souza', 'José Paulo', 'Maria Isabel','Gian Souza', 'José Paulo'];
const arrayComoSet = new Set([...array]);
const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet);
console.log(arraySemItensDuplicados)