let produtos = JSON.parse(localStorage.getItem('produtosCad')) || [];

let nomes = produtos.map(p => `${p.nomeProduto} (${p.numeracao})`)

let entradas = produtos.map(p => {
  const valorInicial = 0;
  return p.estoque.reduce(
    (acumulador, p1) => acumulador + (p1.tipo == "Entrada" ? parseInt(p1.quantidade) : 0), valorInicial
  )
});

let saidas = produtos.map(p => {
  const valorInicial = 0;
  return p.estoque.reduce(
    (acumulador, p1) => acumulador + (p1.tipo == "Saída" ? parseInt(p1.quantidade) : 0), valorInicial
  )
});

let produtosComprados = 0;
let valorProdutosComprados = 0;
for (let i in produtos) {
  for (let j in produtos[i].estoque) {
    if (produtos[i].estoque[j].tipo == "Entrada") {
      produtosComprados += parseInt(produtos[i].estoque[j].quantidade);
      valorProdutosComprados += parseFloat(produtos[i].estoque[j].precoCompra) * parseInt(produtos[i].estoque[j].quantidade);
    }
  }
}
console.log(produtosComprados);
console.log(valorProdutosComprados);

card_qnt_prod_comprados.innerHTML = produtosComprados;
card_valor_prod_comprados.innerHTML = 'R$' + valorProdutosComprados



let produtosVendidos = 0;
let valorProdutosVendidos = 0;
for (let i in produtos) {
  for (let j in produtos[i].estoque) {
    if (produtos[i].estoque[j].tipo == "Saída") {
      produtosVendidos += parseInt(produtos[i].estoque[j].quantidade);
      valorProdutosVendidos += parseFloat(produtos[i].estoque[j].precoVenda) * parseInt(produtos[i].estoque[j].quantidade);
    }
  }
}
console.log(produtosVendidos);
console.log(valorProdutosVendidos);

card_qnt_prod_vendidos.innerHTML = produtosVendidos;
card_valor_prod_vendidos.innerHTML = 'R$' + valorProdutosVendidos



const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const {
      ctx
    } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#FFFFFF';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};


const dados = {
  labels: nomes,
  datasets: [{
      label: 'Entradas',
      data: entradas,
      borderColor: 'rgb(0,0,0)',
      backgroundColor: 'rgba(0,177,157)',
    },
    {
      label: 'Saídas',
      data: saidas,
      borderColor: 'rgb(0,0,0)',
      backgroundColor: 'rgba(226,1,35)',
    },
  ]
};

const config = {
  type: 'bar',
  data: dados,
  options: {
    responsive: true,
    plugins: {
      customCanvasBackgroundColor: {
        color: 'rgb(255,255,255)',
      },
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Movimentações de estoque',
        color: 'rgb(128,128,128)'
      }
    }
  },
  plugins: [plugin],
};

const ctx = document.getElementById('myChart');

new Chart(ctx, config, dados);



const dados2 = {
  labels: nomes,
  datasets: [{
    label: 'Entradas',
    data: entradas,
    fill: true,
    borderColor: 'rgb(0,177,157,0.5)',
    backgroundColor: 'rgba(0,177,157,0.5)',
    pointBackgroundColor: 'rgb(0,177,157)',
    pointBorderColor: 'rgb(0,177,157)',
    pointHoverBackgroundColor: 'rgb(0,177,157)',
    pointHoverBorderColor: 'rgb(20,177,157)'
  }, ]
};

const config2 = {
  type: 'radar',
  data: dados2,
  options: {
    elements: {
      line: {
        borderWidth: 2,
        responsive: true,
        plugins: {
          customCanvasBackgroundColor: {
            color: 'rgb(255,255,255)',
          },
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Compra x Venda',
            color: 'rgb(255,255,255)'
          }
        }
      }
    }
  },
  plugins: [plugin],
};

const ctx2 = document.getElementById('radar');

new Chart(ctx2, config2, dados2);


const dados3 = {
  labels: nomes,
  datasets: [{
    label: 'Entradas',
    data: entradas,
    borderColor: 'rgb(0,0,0)',
    backgroundColor: 'rgba(0,177,157)',
  }, ]
};

const config3 = {
  type: 'bar',
  data: dados3,
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      customCanvasBackgroundColor: {
        color: 'rgb(255,255,255)',
      },
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Valor em estoque',
        color: 'rgb(128,128,128)'
      }
    }
  },
  plugins: [plugin],
};

const ctx3 = document.getElementById('horizontalBar');

new Chart(ctx3, config3, dados3);


const dados4 = {
  labels: nomes,
  datasets: [{
    label: 'Entradas',
    data: entradas,
    borderColor: 'rgb(255,255,255)',
    backgroundColor: [
      'rgb(0, 177, 157)',
      'rgb(255, 205, 86)',
		  'rgb(54, 162, 235)',
  		'rgb(255, 99, 132)',
			'rgba(226, 1, 35)'
    ],
  }, ]
};

const config4 = {
  type: 'doughnut',
  data: dados4,
  plugins: {
    customCanvasBackgroundColor: {
      color: 'rgb(255,255,255)',
    },
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'Quantidade em estoque',
      data: dados4,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  plugins: [plugin],
};

const ctx4 = document.getElementById('doughnut');

new Chart(ctx4, config4, dados4);
