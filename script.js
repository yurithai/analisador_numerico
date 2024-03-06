let number = document.querySelector("#txtn")
let res = document.querySelector("#result")
let list = document.querySelector("#tab-select")
let valores = []

function isNumber(n) {  // Para saber se o número está entre 1 e 100

    if (Number(n) >= 1 && Number(n) <= 100) { 
        return true
    }
    else {
        return false
    }

}

function inList(n, l) { // Para saber se o número já foi adicionado a lista

    if (l.indexOf(Number(n)) != -1) {  // Procura o número na lista se o resultado for -1, não foi adicionado
        return true
    }
    else {
        return false
    }

}

function adicionar() {

    if (isNumber(number.value) && !inList(number.value, valores)) {    // Valor está correto e Não está na lista
        valores.push(Number(number.value))                             // Adiciona o Número ao vetor
        let item = document.createElement("option")                    // Cria uma option para o select
        
        item.text = `Valor ${number.value} Adicionado`                 // A variável item atribui este valor
        list.appendChild(item)                                         // Adiciona o item a lista
        res.innerHTML = ""                                             // Se for adicionado mais um valor após a finalização, o texto fica vazio
    }
    else {
        alert("Valor inválido ou já Encontrado na lista!")
    }

    number.value = ""           // Caixa fica vazia após clicar em Adicionar
    number.focus()
}

function finalizar() {
    if (valores.length == 0) {                                  // Verifica se há valores na lista       
        alert("Adicione valores antes de finalizar!")               
    }
    else {
        let tot = valores.length                                // Conta a qtd de valores 
        let maior = valores[0]                                  // Faz a verificação a partir da posição 0 
        let menor = valores[0]
        let sum = 0
        let media = 0

        for (let pos in valores) {                               // Para cada posição em valores                   
            sum += valores[pos]
            media = sum / tot

            if (valores[pos] > maior) {                          // Se o valor de determinada posição for > o maior ele passa a ser o maior
            maior = valores[pos]                                 // O maior valor passa a ser valores[pos]
            }       
            else if (valores[pos] < menor) {
                menor = valores[pos]                            
            }
        }

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${tot} número(s) cadastrado(s).</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`

    }
}


