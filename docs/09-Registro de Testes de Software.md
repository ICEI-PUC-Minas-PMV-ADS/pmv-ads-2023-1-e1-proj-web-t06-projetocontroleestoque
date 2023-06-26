# Registro de Testes de Software

## Tela de Cadastro

**Testes de navegação:**

Conforme imagem disposta abaixo podemos observar que a navegabilidade da página de cadastro funciona corretamente. Todos os links dispostos na página direcionam para a página desejada, sem apresentar quaisquer erro. Para este teste cliquei sobre o link com a seguinte descrição: "Já possui cadastro? Faça login." e fui direcionado para a página de login, como era esperado.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/26d2df65-9aad-4e14-9725-ebafcc5814e2)

**Testes de campos do formulário:**

Neste caso de teste cliquei sobre o botão "CADASTRAR" sem preencher nenhum campo do formulário para verificar se o cadastro ia ser efetuado ou se o usuário receberia algum alerta informando a necessidade de preencher todos os campos corretamente antes de prosseguir. Como podemos ver no print logo abaixo foi exibido um alerta indicando a necessidade de preencher todos os campos, como era de se esperar.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/4f33663a-faf9-4269-9204-0dcd31bb3ee6)

Aqui preenchi todos os campos conforme solicitado e verifiquei se o cadastro ia ser realizado com sucesso ou não e como podemos ver no print abaixo o teste foi bem sucedido, consegui me cadastrar sem nenhuma intercorrência.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/d3b3fe26-c99b-4a6c-9c0d-f7e39bd2864d)

Como caso de insucesso aponto apenas a possibilidade de preencher o campo "nome" apenas com números e outros caracteres especiais, permitindo assim que o usuário preencha os campos de forma incorreta desde que digite a quantidade mínima de caracteres estabelecida.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/1ffbfa34-ca63-46ff-8d33-530840d336f5)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/7c789d0a-a104-4f8a-a7a8-842d1e8dd5fa)

**Teste de responsividade:**

Para testar a responsividade da página diminui a janela de forma a simular um dispositivo móvel na vertical e novamente não obtive nenhum resultado inesperado. Todos os elementos estão bem dispostos e legíveis.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/e1db2ba9-148d-4564-b98a-61a64faeb3a3)

*Responsável pelos testes - Tela de Cadastro: Marco Avezedo.*

## Tela de Login

**Teste de navegação:**

Como podemos ver na imagem abaixo a navegação da página de login funciona corretamente. Ao clicar sobre o link com a descrição "Não possui login? Cadastre-se." fui direcionada para a página de cadastro com sucesso.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/6082cc3f-9839-4bec-81f1-fa9fb30f7f94)

**Testes de campos do formulário:**

Para este teste apertei no botão "ENTRAR" sem preencher nenhum dos campos solicitados para averiguar se eu receberia algum aviso sobre a necessidade de preencher todos os campos ou se poderia prosseguir mesmo sem preenchê-los e como era esperado recebi um alerta informando da necessidade de informar os dados que são pedidos antes de continuar. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/5778e133-0dc8-41b9-8918-b78a6a248f9e)

Neste teste eu tentei colocar uma senha diferente da que foi cadastrada anteriormente para verificar se iria aparecer algum alerta informando que o usuário ou a senha estavam incorretos e como é possível ver no print abaixo foi exibido o alerta com êxito.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/708b5f6d-67e7-43b7-956b-b59f361a370e)

Agora neste terceiro momento preenchi usuário e senha exatamente iguais ao que cadastrei e tentei logar. Como era de se esparar, consegui logar sem nenhum problema e fui direcionada para o que seria a página principal do site. Print logo abaixo.

*Obs.: Página principal ainda em construção no momento do teste.*

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/c6766f81-f155-4da9-a1f1-f93ede30c50b)

Como caso de insucesso e possível ponto de melhoria aponto apenas uma situação: ao tentar logar com uma conta que não existe, ou seja, não foi cadastrada eu recebi um alerta informando que o usuário ou senha estão incorretas e creio que talvez o mais adequado seria aparecer um alerta que o usuário não existe, ou não foi cadastrado. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/4337a62f-7fb6-405c-9c37-6c7475abeb96)

**Teste de responsividade:**

Para o teste de responsividade busquei diminuir a tela para simular um celular na vertical e pelo que pude observar a página está responsiva. Os elementos da página continuam legíveis e não se comportam de nenhuma maneira incomum, sobrepondo uns aos outros ou atrapalhando a visualização.  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/ed068aa6-fdf5-4aeb-9d8d-ef2c6998f924)

*Responsável pelos testes - Tela de Cadastro: Samara Almeida.*

## Tela de Cadastro de Produtos

**Testes de navegação:**

Para a realização deste teste cliquei sobre todos os links dispostos na página e observei se o direcionamento seria feito de forma correta e sem intercorrências. O teste foi bem sucedido. Todos os links dispostos na páginas são navegáveis e direcionam para a página esperada sem apresentar quaisquer erros. No exemplo que segue abaixo, cliquei sobre o botão "COMPRA DE PRODUTOS" e fui direcionado para a página correta.  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/e405962e-0ddd-403b-9899-21f442dffbe9)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/b7ea3569-3055-42e9-b711-df7aad1de8dd)

**Testes de campos do formulário:**

Assim como nas outras páginas, ao clicar no botão "CADASTRAR" sem preencher nenhum campo o usuário recebe um alerta informando que antes de continuar é imprescindível que preencha todos os campos. Um resultado esperado, logo, um caso de sucesso. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/8c381267-4110-40ce-a9d0-2b74a3ebad0b)

Para testar se o usuário poderia cadastrar um mesmo produto duas vezes tentei cadastrar dois produtos de mesmo nome e numeracção, como era de se esparar foi exibido um alerta informando que já existe um produto de mesmo nome e numeracação cadastrado. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/68c0ab3f-2675-4de8-ab9d-94907b73d0a9)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/e58bd351-2828-4eb3-aa3a-a1325853ad7b)

Para realização deste teste, foi registrado um produto da marca Adidas. O produto foi cadastrado com sucesso.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/127454796/ac053d5d-f0d0-4877-8fb0-7979b6b06dda)

**Teste de responsividade:**

Ao reduzir a janela para simular um dispositivo móvel na vertical podemos observar que a página de Cadastro de Produtos está reponsiva. O formulário continua bem disposto e legível. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/ffe1f238-c2c8-411f-9c43-bf4e36dbda5f)

*Responsável pelos testes - Tela de Cadastro de Produtos: Anderson Nascimento.*

## Tela de Registro de Compra de Produtos

**Teste de navegação:**

Todos os links dispostos na página são navegáveis e direcionam para a página esperada sem nenhum erro. Aqui ao clicar sobre o botão "VENDA DE PRODUTOS" o usuário é redirecionado para a página de Registro de Venda de Produtos com sucesso.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/188b8f83-ee47-4efc-b58d-c96d5a85b038)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/82749c3d-9462-4e97-9b51-4b73a8fa0a3f)

**Testes de campos do formulário:**

Ao clicar sobre o botão "REGISTRAR" sem preencher nenhum campo um aviso é exibido um aviso com êxito, sugerindo ao usuário que informe os dados solicitados antes de prosseguir. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/690b3d8d-6d5c-44c7-a053-ad0c1010fcf5)

Após a realização do cadastro do produto "Adidas", foi lançado a entrada de 10 unidades desse produto. Conforme o print abaixo, o registro foi realizado com sucesso.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/127454796/4f7ce488-7b1e-4c5a-82f1-3e9f5b3ba33f)

**Teste de responsividade:**

Aqui ao diminuir a janela para simular um dispositivo móvel na vertical podemos observar que a página está reponsiva. O formulário continua legível, elementos bem dispostos sem nenhuma sobreposição que atrapalhe a leitura da informações.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/b545967e-8d4e-42e9-8301-edf0d38ba931)

*Responsável pelos testes - Tela de Registro de Compra de Produtos: Anderson Nascimento.*

## Tela de Registro de Venda de Produtos

**Testes de navegação:**

Para este teste cliquei em todos os links dispostos na página e observei se o direcionamento seria realizado da forma que era esperada. O teste foi um sucesso. Todos os links dispostos na páginas são navegáveis, sem apresentar desvios ou erros. No exemplo a seguir, cliquei sobre o botão "PÁGINA INICIAL" e fui direcionado para a página correta, que no caso desta aplicação é a página onde temos o Dashboard com as informações gerais sobre o estoque.  

*Obs.: Dashboard em fase de desenvolvimento no momento em que foi realizado o teste.*

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/c6aa4c69-dfeb-4f9c-a6ec-d6cb78dc2a47)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/2ea04624-f0d3-4e51-88ae-95760353665b)

**Testes de campos do formulário:**

Assim como nas páginas testadas previamente, ao clicar no botão "REGISTRAR" sem preencher nenhum campo o usuário recebe um alerta informando que antes de continuar é necessário que preencha todos os campos. Teste de êxito. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/b3f3f02a-47ef-4cb6-a162-6e17b75b87f8)

Após a realização do cadastro do produto "Adidas", foi simulado a venda de 5 unidades desse mesmo produto. Conforme o print abaixo, o registro foi realizado com sucesso.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/127454796/659e85fb-9665-454c-8cdf-6bfedbb02d45)

**Teste de responsividade:**

Para este teste diminuí a janela para representar a tela de um celular na vertical e podemos observar que a página está reponsiva. O formulário continua legível, elementos bem dispostos.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/07ffe453-f880-40b8-b700-e78a8939ebc8)

*Responsável pelos testes - Tela de Registro de Venda de Produtos: Anderson Nascimento.*

## Dashboard

**Testes de armazenamento de dados:**

Para esse teste, cadastrei alguns produtos e cliquei com o botão direito do mouse sobre a página. Em seguida, selecionei a opção "Inspecionar" e verifiquei se os dados que cadastrei estavam sendo armazenados corretamente. O teste foi um sucesso, como pode ser observado no print logo abaixo.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/93fb571e-c6fc-44e5-8f08-1e4cd62b275e)

**Testes de navegação:**

Para testar se a navegação da página estava funcionando corretamente cliquei sobre todos os links dispostos na página e fui direcionada para as páginas correspondentes sem que houvesse nenhum erro, logo, o teste foi bem sucedido. Nas imagens logo abaixo cliquei sobre a opção "CADASTRAR NOVOS PRODUTOS" e como podemos ver fui redirecionada para a página de cadastro de produtos.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/835e3b0b-c495-419d-83a2-3a324cde5b97)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/cb47d829-6b69-46c4-9b1d-3f93790a886d)

**Testes de dinâmica e atualização da página:**

Neste caso de teste eu procrei cadastrar novos produtos, registrar a entrada e a saída destes mesmo produtos para averiguar se o Dashboard ia, de fato, ir se atualizando conforme novos dados são inseridos. Cadastrei um novo produto chamado "TENIS NIKE" e registrei a entrada de 10 unidades deste produto, logo em seguida registrei a saída de 3 unidades deste mesmo produto, cujo valor de compra foi R$ 50,00 e o valor de venda R$ 150,00. Como podemos observar na imagem abaixo, através dos gráficos, o teste foi exitoso. O dashboard esta dinâmico se atualiza conforme novas informaçãoes vão sendo introduzidas.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/c57299d4-44a2-4fe7-980e-6b8765e6a531)

**Teste de responsividade:**

Como um caso de insucesso e um ponto de melhoria para a próxima sprint eu sugiro apenas tornar a página responsiva. Quando reduzimos a tela para simular um celular ou um tablet o layout acaba perdendo forma, os elementos ficam desalinhados e a principal informação da página que são os gráficos ficam difícies de se visualizar (principalmente para dispositivos móveis).

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/d02be443-8369-457d-920d-aae2f65f30e6)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t06-projetocontroleestoque/assets/122751654/9acc69a2-ce86-4c09-9831-fe24fd2dc597)

*Responsável pelos testes - Dashboard: Samara Almeida.*








