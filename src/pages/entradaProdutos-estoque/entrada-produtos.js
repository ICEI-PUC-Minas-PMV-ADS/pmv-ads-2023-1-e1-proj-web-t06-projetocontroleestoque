let labelProduto = document.querySelector('#labelProduto')
let nomeProduto = document.querySelector('#nomeProduto')
let validNomeProduto = false

let labelQuantidade = document.querySelector('#labelQuantidade')
let quantidade = document.querySelector('#quantidade')
let validQuantidade = false

let labelNumeracao = document.querySelector('#labelNumeracao')
let numeracao = document.querySelector('#numeracao')
let validNumeracao = false

let labelCompra = document.querySelector('#labelCompra')
let precoCompra = document.querySelector('#precoCompra')
let validPrecoCompra = false

let labelData = document.querySelector('#labelData')
let data = document.querySelector('#data')
let validData = false

let labelObservacao = document.querySelector('#labelObservacao')
let observacao = document.querySelector('#observacao');

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

precoCompra.addEventListener('keyup', () => {
    if (precoCompra.value == '' || precoCompra.value == "0") {
        labelCompra.innerHTML = 'Preço de compra *Insira o preço de compra.'
        precoCompra.setAttribute('style', 'box-shadow: 1px 1px 2px red')
        validPrecoCompra = false

    } else {
        labelCompra.innerHTML = 'Preço de compra'
        precoCompra.setAttribute('style', 'box-shadow: 1px 1px 2px green')
        validPrecoCompra = true
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


// RECUPERA O BANCO DE DADOS
let produtos = JSON.parse(localStorage.getItem('produtosCad') || '[]');

// PREENCHE CAMPO DE PRODUTOS E NUMERAÇÕES
nomnumProduto.innerHTML = '';
for( let i in produtos ) {
     nomnumProduto.innerHTML += `
        <option value=${i}>${produtos[i].nomeProduto} (Numeração: ${produtos[i].numeracao})</option>
    `;
} 


function registrar() {

    let i = nomnumProduto.value;
    
    if (validQuantidade && validPrecoCompra && validData) {

        produtos[i].estoque.push(
            {
                tipo: 'Entrada',
                quantidade: quantidade.value,
                precoCompra: precoCompra.value,
                data : data.value,
                observacao : observacao.value
            }
        )

        localStorage.setItem('produtosCad', JSON.stringify(produtos))

        alert('Cadastro efetuado com sucesso!')
     
    } else {
        alert('Preencha todos os campos antes de continuar!')
    }
  
}

