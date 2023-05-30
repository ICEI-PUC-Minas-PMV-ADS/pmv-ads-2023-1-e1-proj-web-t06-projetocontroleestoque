function entrar() {
    let usuarioLabel = document.querySelector('#usuarioLabel')
    let usuario = document.querySelector('#usuario')

    let senhaLabel = document.querySelector('#senhaLabel')
    let senha = document.querySelector('#senha')

    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (usuario.value == item.user && senha.value == item.senha) {
            userValid = {
                nome: item.nome,
                user: item.user,
                senha: item.senha
            }
        }
    })

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = 'http://127.0.0.1:5500/src/pages/pagina-principal/pagina-principal.html'
    }
    else {
        alert('Usuário ou senha incorretos!')
    }

}