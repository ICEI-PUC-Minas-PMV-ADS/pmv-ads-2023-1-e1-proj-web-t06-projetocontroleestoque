let labelProduto = document.querySelector('#labelProduto')
let nomeProduto = document.querySelector('#nomeProduto')
let validNomeProduto = false

let labelQuantidade = document.querySelector('#labelQuantidade')
let quantidade = document.querySelector('#quantidade')
let validQuantidade = false

let labelNumeracao = document.querySelector('#labelNumeracao')
let numeracao = document.querySelector('#numeracao')
let validNumeracao = false

let labelVenda = document.querySelector('#labelCompra')
let precoVenda = document.querySelector('#precoCompra')
let validPrecoVenda = false

let labelData = document.querySelector('#labelData')
let data = document.querySelector('#data')
let validData = false

let labelObservacao = document.querySelector('#labelObservacao')
let observacao = document.querySelector('#observacao')

nomeProduto.addEventListener('keyup', () => {
    if (nomeProduto.value.length <= 4 || nomeProduto.value == '') {
        labelProduto.innerHTML = 'Nome do produto *Insira o nome do produto (mínimo 4 caracteres).'
        nomeProduto.setAttribute('style', 'box-shadow: 1px 1px 2px red')
        validNomeProduto = false

    } else {
        labelProduto.innerHTML = 'Nome do produto'
        nomeProduto.setAttribute('style', 'box-shadow: 1px 1px 2px green')
        validNomeProduto = true
    }
})

quantidade.addEventListener('keyup', () => {
    if (quantidade.value == "0" || quantidade.value < 0 || quantidade.value == '') {
        labelQuantidade.innerHTML = 'Quantidade *Insira um valor maior do que zero.'
        quantidade.setAttribute('style', 'box-shadow: 1px 1px 2px red')
        validQuantidade = false

    } else {
        labelQuantidade.innerHTML = 'Quantidade'
        quantidade.setAttribute('style', 'box-shadow: 1px 1px 2px green')
        validQuantidade = true
    }
})

numeracao.addEventListener('keyup', () => {
    if (numeracao.value == '') {
        labelNumeracao.innerHTML = 'Numeração *Insira a numeração do calçado.'
        numeracao.setAttribute('style', 'box-shadow: 1px 1px 2px red')
        validNumeracao = false

    } else {
        labelNumeracao.innerHTML = 'Numeração'
        numeracao.setAttribute('style', 'box-shadow: 1px 1px 2px green')
        validNumeracao = true
    }
})

precoVenda.addEventListener('keyup', () => {
    if (precoVenda.value == '' || precoVenda.value == "0") {
        labelVenda.innerHTML = 'Preço de venda *Insira o preço de compra.'
        precoVenda.setAttribute('style', 'box-shadow: 1px 1px 2px red')
        validPrecoVenda = false

    } else {
        labelVenda.innerHTML = 'Preço de venda'
        precoVenda.setAttribute('style', 'box-shadow: 1px 1px 2px green')
        validPrecoVenda = true
    }
})

data.addEventListener('keyup', () => {
    if (data.value == '') {
        labelData.innerHTML = 'Data *Insira a data de entrada do produto.'
        data.setAttribute('style', 'box-shadow: 1px 1px 2px red')
        validData = false

    } else {
        labelData.innerHTML = 'Data'
        data.setAttribute('style', 'box-shadow: 1px 1px 2px green')
        validData = true
    }
})

function registrar() {
    if (validNomeProduto && validQuantidade && validNumeracao && validPrecoVenda && validData) {
        let produtosCadVenda = JSON.parse(localStorage.getItem('produtosCadVenda') || '[]')

        produtosCadVenda.push(
            {
                nomeProduto: nomeProduto.value,
                quantidade: quantidade.value,
                numeracao: numeracao.value,
                precoVenda: precoVenda.value,
                data : data.value,
                observacao : observacao.value
            }
        )

        localStorage.setItem('produtosCadVenda', JSON.stringify(produtosCadVenda))

        alert('Cadastro efetuado com sucesso!')

    } else {
        alert('Preencha todos os campos antes de continuar!')
    }

}