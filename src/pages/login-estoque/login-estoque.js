function entrar() {
    let usuarioLabel = document.querySelector('#usuarioLabel')
    let usuario = document.querySelector('#usuario')

    let senhaLabel = document.querySelector('#senhaLabel')
    let senha = document.querySelector('#senha')
    
    if(usuario.value=='' || senha.value=='') {
    	alert( "Preencha o usuário e a senha!");
      return;
    }
    
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
       window.location.href = '../dashboard-estoque/dashboard-estoque.html'
    }
    else {
        alert('Usuário ou senha incorretos!')
    }

}