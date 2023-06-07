let labelProduto = document.querySelector('#labelProduto')
let nomeProduto = document.querySelector('#nomeProduto')
let validNomeProduto = false

let labelQuantidade = document.querySelector('#labelQuantidade')
let quantidade = document.querySelector('#quantidade')
let validQuantidade = false

let labelNumeracao = document.querySelector('#labelNumeracao')
let numeracao = document.querySelector('#numeracao')
let validNumeracao = false

let labelVenda = document.querySelector('#labelVenda')
let precoVenda = document.querySelector('#precoVenda')
let validPrecoVenda = false

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

precoVenda.addEventListener('keyup', () => {
    if (precoVenda.value == '' || precoVenda.value == "0") {
        labelVenda.innerHTML = 'Preço de venda *Insira o preço de venda.'
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
    
    if (validQuantidade && validPrecoVenda && validData) {

        produtos[i].estoque.push(
            {
                tipo: 'Saída',
                quantidade: quantidade.value,
                precoVenda: precoVenda.value,
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