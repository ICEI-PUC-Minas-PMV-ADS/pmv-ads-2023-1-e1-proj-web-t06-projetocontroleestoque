let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let ConfirmarSenha = document.querySelector('#ConfirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validConfirmarSenha = false

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelNome.innerHTML = 'Nome: *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false

    } else {
        labelNome.innerHTML = 'Nome: '
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        labelUsuario.innerHTML = 'Usuario: *Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false

    } else {
        labelUsuario.innerHTML = 'Usuario: '
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        labelSenha.innerHTML = 'Senha: *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false

    } else {
        labelSenha.innerHTML = 'Senha: '
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

ConfirmarSenha.addEventListener('keyup', () => {
    if(senha.value != ConfirmarSenha.value){
        labelConfirmarSenha.innerHTML = 'Confirme a senha: *As senhas não conferem'
        ConfirmarSenha.setAttribute('style', 'border-color: red')
        validConfirmarSenha = false

    } else {
        labelConfirmarSenha.innerHTML = 'Confirme a senha: '
        ConfirmarSenha.setAttribute('style', 'border-color: green')
        validConfirmarSenha = true
    }
})

function cadastrar () {
    if (validNome && validUsuario && validSenha && validConfirmarSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push (
            {
                nome: nome.value,
                user: usuario.value,
                senha: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        alert('Cadastro efetuado com sucesso!')

    } else {
        alert('Preencha todos os campos antes de continuar!')
    }
 
}