function cadastroD(){

    let login = document.getElementById("nome").value
    let testabelecimento =  document.getElementById("exampleFormControlSelect1").value
    let email = document.getElementById("exampleInputEmail1").value

    let dados = [
        {id:0,login:login,testabelecimento:testabelecimento,email:email}
    ]

    alert("Obrigada por fazer o seu cadastro " + dados[0].login + "\n Você tem um(a) " + dados[0].testabelecimento +" certo?" + "\n Seu email é " + dados[0].email)
    }

// função que pega o cadastro dos Doadores 'D'

function cadastroR(){
    let login = document.getElementById("nome").value
    let torganizacao =  document.getElementById("exampleFormControlSelect1").value
    let email = document.getElementById("exampleInputEmail1").value

    let dados = [
        {id:0,login:login,torganizacao:torganizacao,email:email}
    ]

    alert("Obrigada por fazer o seu cadastro " + dados[0].login + "\n Você é um(a) " + dados[0].torganizacao  +" certo?"+ "\n Seu email é " + dados[0].email)
    }
// função que pega o cadastro dos recebedores 'R'