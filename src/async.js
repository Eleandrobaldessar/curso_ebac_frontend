//
function funcaoMuitoPesada() {
    let execucoes = 0;
    for(let i = 0; i < 1000000000; i++) {
        execucoes ++;
    }
    return execucoes;
}

// Exececução Multithread ou async
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for(let i = 0; i < 1000000000; i++) {
            execucoes ++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('Deu erro na iteração dos números')
    }
})

const promiseComParametro = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

async function execucaoPrincipal() {
    console.log("inicio")

    promiseComParametro('eleandro@gmail.com', 456575).then(resultado => {
        console.log(resultado);
    })

    //console.log(funcaoMuitoPesada());
    await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    console.log("fim")
}

execucaoPrincipal();