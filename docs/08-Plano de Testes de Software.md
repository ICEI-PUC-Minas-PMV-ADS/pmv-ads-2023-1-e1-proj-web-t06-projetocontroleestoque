# Plano de Testes de Software

Para a realização dos testes de software, é fundamental atender aos seguintes requisitos:

 - O site deve estar devidamente publicado na Internet.
 - É necessário utilizar um navegador web como o Chrome, Firefox ou Edge.
 - Garanta a disponibilidade de conexão com a Internet para acessar as plataformas e APIs necessárias.

Abaixo, descrevemos os testes funcionais que devem ser executados no aplicativo.


## Caso de Teste	CT-01 - Login
Requisitos Associados: O site deve apresentar na página principal Login e a opção de fazer o cadastro, caso o usuário esteja fazendo o primmeiro acesso.

Objetivo: Verificar se os usuários estão conseguindo navegar na tela de cadastro e/ou fazer o login.

Passos:
 1) Abrir o arquivo login-estoque.html com os navegadores Edge, Chrome ou Firefox;
 2) Visualizar a página de login;
 3) Digitar login e senha de usuário teste;
 4) Clicar no link "Não possui login? Cadastre-se";
 5) Visualizar a tela de cadastro de novo usuário.

Critérios de êxito:
 1) A tela de login e senha devem aparecer com os respectivos campos.
 2) Ao clicar no link "Não pos, deverá abrir uma tela sui login? Cadastre-se", deverá abrir uma tela com um formulário de cadastro de novos usuários.

## Caso de Teste	CT-02 - Cadastre-se
Requisitos Associados: A página deverá permitir cadastro de novos usuários.

Objetivo: Verificar se está cadastrando novos usuários.

Passos:
 1) Abrir o arquivo cadastro-estoque.html com os navegadores Edge, Chrome ou Firefox;
 2) Visualizar a página "Cadastra-se";
 3) Digitar nome, usuário, senha, confirmação de senha e clicar em "Cadastrar";
 4) Clicar em "Já tem cadastro? Faça login aqui."
 5) Fazer login

## Caso de Teste	CT-03 - Cadastro de Produtos
Requisitos Associados: Cadastrar produtos

Objetivo: Verificar se está cadastrando produtos

Passos:
 1) Abrir o arquivo cadastrosprodutos.html com os navegadores Edge, Chrome ou Firefox;
 2) Colocar o nome do produto e o número;
 3) Clicar em cadastrar
 4) Aparece um aviso que o produto foi cadastrado.

## Caso de Teste	CT-04 - Entrada de Produtos
Requisitos Associados: Entrada de produtos

Objetivo: Verificar se está registrando a entrada de produtos

Passos:
 1) Abrir o arquivo entrada-produtos.html com os navegadores Edge, Chrome ou Firefox;
 2) Colocar o nome do produto, quantidade, preço de compra, data e observações(opcional);
 3) Clicar em "Registrar;
 4) Aparece um aviso que o produto foi cadastrado.

## Caso de Teste	CT-05 - Saída de Produtos
Requisitos Associados: Registrar a venda do produto
Objetivo: Verificar se está registrando a saída de produtos

Passos:
 1) Abrir o arquivo saída-produtos.html com os navegadores Edge, Chrome ou Firefox;
 2) Colocar o nome do produto, quantidade, preço de venda, data e observações(opcional);
 3) Clicar em "Registrar;
 4) Aparece um aviso que o produto foi cadastrado.
