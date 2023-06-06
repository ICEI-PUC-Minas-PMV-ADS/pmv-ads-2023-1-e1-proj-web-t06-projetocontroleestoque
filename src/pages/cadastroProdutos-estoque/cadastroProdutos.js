let labelProduto = document.querySelector('#labelProduto')
let nomeProduto = document.querySelector('#nomeProduto')
let validNomeProduto = false

let labelNumeracao = document.querySelector('#labelNumeracao')
let numeracao = document.querySelector('#numeracao')
let validNumeracao = false

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

function cadastrar() {
    let produtosCadCompra = JSON.parse(localStorage.getItem('produtosCadCompra') || '[]')
    if (produtosCadCompra.findIndex(p => p.nomeProduto == nomeProduto.value && p.numeracao == numeracao.value) >= 0) {

        alert('Produto com o mesmo nome e numeração já cadastrado!')
        alert('Retorne a página inicial e selecione no menu a opção "Registro de Compra de Produtos" para incluir a chegada de nova remessa deste produto.')
        
        return;
    }
    else {
        if (validNomeProduto && validNumeracao) {

            produtosCadCompra.push(
                {
                    nomeProduto: nomeProduto.value,

                    numeracao: numeracao.value,

                    estoque: []
                }
            )
            
            localStorage.setItem('produtosCadCompra', JSON.stringify(produtosCadCompra))

            alert('Cadastro efetuado com sucesso!')
        }
        else {
            alert('Preencha todos os campos antes de continuar!')
        }
    }
}




