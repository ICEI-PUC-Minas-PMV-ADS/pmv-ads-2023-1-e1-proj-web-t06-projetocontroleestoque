
localStorage.setItem('produtosCad', '[{"nomeProduto":"Sapato preto","numeracao":"41","estoque":[{"tipo":"Entrada","quantidade":"2","precoCompra":"150","data":"07/06/2023","observacao":""},{"tipo":"Entrada","quantidade":"4","precoCompra":"120","data":"08/06/2023","observacao":""},{"tipo":"Saída","quantidade":"1","precoVenda":"250","data":"09/06/2023","observacao":""}]},{"nomeProduto":"Sapato preto","numeracao":"40","estoque":[{"tipo":"Entrada","quantidade":"1","precoCompra":"180","data":"05/06/2023","observacao":""},{"tipo":"Saída","quantidade":"1","precoVenda":"220","data":"07/06/2023","observacao":""}]},{"nomeProduto":"Tênis","numeracao":"40","estoque":[{"tipo":"Entrada","quantidade":"3","precoCompra":"280","data":"06/06/2023","observacao":""}]}]');


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
