function fazerLogin(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let banco = localStorage.getItem("Banco");
    banco = JSON.parse(banco);
    
    for (let i = 0; i < banco.length; i++) {
        if (banco[i].dadosLogin.email == email && banco[i].dadosLogin.senha == senha) {
            sessionStorage.setItem("LoginAtual", JSON.stringify(banco[i]));
            alert("Bem-vindo")
        }
    }
    

}

