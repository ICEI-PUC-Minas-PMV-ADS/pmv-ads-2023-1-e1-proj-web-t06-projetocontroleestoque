const usuarios = [
    {
        login: 'admin',
        pass: 'admin'
    }
]

let button = document.getElementById('buttonLogin')

button.addEventListener('click', function fazerLogin(){

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login){
            alert('Logado com sucesso!')
        }

    }

})