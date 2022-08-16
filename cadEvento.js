console.log("=============Palestrantes=============")
console.log(" Mário Sérgio Cortella e Bernardinho")
console.log("======================================")

listaDeParticipantes = []

function cadastro(n) {
    if (n <= 100) {
        console.log("Ainda temos vagas, faça o seu cadastro\n")
        
    }else if (n =>101) {
        return console.log("Acabaram as vagas, aguarde o próximo evento.")
    }
    console.log("===============CADASTRO===============")
    let idade = prompt("Quantos anos de idade?")
    if (idade > 17) {
        console.log("Vamos fazer seu cadastro!")
        let nome = prompt("Digite seu primeiro nome: ")
        let cad = (nome+"-"+idade)
        listaDeParticipantes.push(cad)  
        console.log("Cadastro realizado com sucesso!")
    }else {
        return console.log("Cadastro não pode ser realizado, idade limite de 18 anos.")
    }
            
}

console.log(cadastro(99));
console.log(listaDeParticipantes);
