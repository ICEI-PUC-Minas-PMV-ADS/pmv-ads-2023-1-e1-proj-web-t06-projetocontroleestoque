# Especificações do Projeto

O controle de estoque é extremamente importante para o sucesso de qualquer negócio que lida com a venda de produtos físicos, sendo necessário o monitoramento de perto do estoque de seus produtos para garantir que sempre tenham produtos suficientes para atender à demanda dos clientes. Para especificação do projeto foi criada uma persona para demonstrar os desafios de gerenciar o estoque de forma eficiente.


## Persona

![lojista](https://user-images.githubusercontent.com/101727981/228383438-d9df000f-595c-4f8e-80dc-17dfe375bd05.png)

Bruno Almeida, tem 40 anos, é um empresário que possui uma microempresa de calçados em uma Salvador-Ba. Ele começou seu negócio há alguns anos, e, desde então, tem enfrentado desafios para gerenciar seu estoque de forma eficiente. Como resultado, muitas vezes ele acaba tendo dificuldades em garantir que seus clientes encontrem os produtos que precisam.

Bruno é uma pessoa muito dedicada ao seu trabalho e tem um grande conhecimento sobre a indústria de calçados. No entanto, ele não tem experiência em gerenciamento de estoque e acaba tendo dificuldades para controlar as entradas e saídas de seus produtos. 

Bruno esta procurando ajuda para gerenciar seu estoque de forma mais eficiente, ele precisa entender como fazer isto em tempo real para eliminar problemas como realizar compras fora da hora, gastando assim mais dinehiro, e se deparar com a falta do produto buscado pelo cliente.

Nos momentos livres, Bruno gosta de assistir jogos de futebol e passar tempo com sua família e amigos. Ele acredita que o sucesso de seu negócio depende da capacidade de gerenciar eficientemente seu estoque e atender às necessidades de seus clientes.

motivação: Evitar perdas e melhorar o atendimento aos clientes.

frustração: impossibilidade de realizar inventários mais rapidamente e que pudesse fornecer informações sobre o desempenho de vendas de seus produtos.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                       |PARA ... `MOTIVO/VALOR`                       |
|--------------------|----------------------------------------------------------|----------------------------------------------|
|Lojista             |Registrar entrada e saída de mercadorias                  |Ter um estoque equilibrado                    |
|Lojista             |Saber quando negociar preços e prazos com os fornecedores |Evitar perda de vendas por falta de produtos  |
|Lojista             |Saber quando criar promoção                               |Evitar estoque parado                         |
|Lojista             |Reduziz custos com itens parados                          |Evitar altos custos com armazenagem           |  

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário registre entrada e saída de mercadorias | ALTA | 
|RF-002| Permitir que o usuário informe o estoque minimo obrigatório   | ALTA |
|RF-003| Realizar o calculo do estoque atual | ALTA |
|RF-004| Realizar o calculo do custo de estoque parado | ALTA |
|RF-005| Emitir um alerta quando a mercadoria estiver proxima do estque minimo | ALTA |
|RF-006| Emitir relatório de estoque informando total em estoque e estoque minimo | MEDIA |
|RF-007| Emitir relatório de estoque detalhando as entradas e saídas | MEDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve suportar uma alta quantidade de registro de mercadorias| ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O codigo do projeto deve ser vinculado ao github      |
|04| As tecnologias utilizadas neste projeto devem ser html, css e javascript |
