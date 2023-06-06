console.log('v1.1');

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

/*
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
*/

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

/*
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
*/

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


// Preencher select
nomnumProduto.innerHTML = '';
let produtos = JSON.parse(localStorage.getItem('produtosCadCompra') || '[]');
for( let i in produtos ) {
     nomnumProduto.innerHTML += `
        <option value=${i}>${produtos[i].nomeProduto} (Numeração: ${produtos[i].numeracao})</option>
    `;
} 


function registrar() {

    let i = nomnumProduto.value;
    console.log(produtos[i]);
    
    /*
    if (validQuantidade && validPrecoCompra && validData) {
        let produtosCadCompra = JSON.parse(localStorage.getItem('produtosCadCompra') || '[]')

        produtosCadCompra.push(
            {
                nomeProduto: nomeProduto.value,
                quantidade: quantidade.value,
                numeracao: numeracao.value,
                precoCompra: precoCompra.value,
                data : data.value,
                observacao : observacao.value
            }
        )

        localStorage.setItem('produtosCadCompra', JSON.stringify(produtosCadCompra))

        alert('Cadastro efetuado com sucesso!')
     
    } else {
        alert('Preencha todos os campos antes de continuar!')
    }
  */
}


/* ALTERAÇÕES SUGERIDAS PELO PROFESSOR: */

/* 1. Ordenar vetor dos produtos: */

/* produtos.cadCompra.sort( (a,b) => {     

    const n1 = a.nomeProduto.toUpperCase();
 
    const n2 = b.nomeProduto.toUpperCase();
 
    if(n1 < n2)
 
         return -1;
 
    if(n1 > n2)
 
         return 1;
 
    // n1 == n2
 
    return a.numeracao - b.numeracao;

 });
 
 localStorage.setItem('produtos', JSON.stringify(produtosCadCompra)); */

/* 2. Alteração da function registrar:  */

 /* function registrar() {
    if (validNomeProduto && validQuantidade && validNumeracao && validPrecoCompra && validData) {

        let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

        let index = document.querySelector('#nomeProduto').value;

        produtos[index].estoque.push(
            {
                quantidade: quantidade.value,
                preco: preco.value,
                data : data.value,
                observacao : observacao.value
            }
        )

        localStorage.setItem('produtos', JSON.stringify(produtosCadCompra))

        alert('Cadastro efetuado com sucesso!')

    } else {
        alert('Preencha todos os campos antes de continuar!')
    }

} */

/* 3. Campo select com preenchimento por JavaScript:  */

{/* <select id='nomeProduto'></select>

let selProduto = document.querySelector('#nomeProduto');

let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

for( let i in produtos ) {

     selProduto.innerHTML += `<option value=${i}>${produtos[i].nomeProduto} (Numeração: ${produtos[i].numeracao})</option>`;

} 
*/ }



