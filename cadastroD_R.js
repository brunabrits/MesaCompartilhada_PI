function primeiroAcesso() {
    // Se não tiver "Banco" no localStorage insere 
    if (!localStorage.getItem("Banco")) {
        let dados = [
          {
            id: Date.now(),
            dadosBasicos: {
              nome: "Fatec",
              cnpj: "00.000.000/0000-00",
              tipo: "Outro",
            },
            endereco: {
              logradouro: "Avenida Luiz Merenda",
              numero: "433",
              CEP: "09931-390",
              complemento: "Não tem",
              bairro: "Canhema",
              cidade: "Diadema",
            },
            dadosLogin: {
              email: "Fatec@217.com",
              senha: "Fatec217",
            },
          },
        ];
        banco = JSON.stringify(dados)
        localStorage.setItem("Banco", banco)
    }
}
function pegaValores() {
  let nomeE = document.getElementById("nome").value;
  let cnpj = document.getElementById("cnpj").value;
  let testabelecimento = document.getElementById("tipo").value;
  let endereco = document.getElementById("endereco").value;
  let numero = document.getElementById("numero").value;
  let CEP = document.getElementById("Cep").value;
  let complemento = document.getElementById("Complemento").value;
  let bairro = document.getElementById("Bairro").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  let novoDado = {
    id: Date.now(),
    dadosBasicos: {
      nome: nomeE,
      cnpj: cnpj,
      tipo: testabelecimento,
    },
    endereco: {
      logradouro: endereco,
      numero: numero,
      CEP: CEP,
      complemento: complemento,
      bairro: bairro,
      cidade: "Diadema",
    },
    dadosLogin: {
      email: email,
      senha: senha,
    },
  };

  return novoDado;
}
function limpaCampos() {
document.getElementById("nome").value = "";
document.getElementById("cnpj").value = "";
document.getElementById("tipo").value = "";
document.getElementById("endereco").value = "";
document.getElementById("numero").value = "";
document.getElementById("Cep").value = "";
document.getElementById("Complemento").value = "";
document.getElementById("Bairro").value = "";
document.getElementById("email").value = "";
document.getElementById("senha").value = "";
}
// função que pega o cadastro dos Doadores 'D'
function cadastroD(){
    let novoCadastro = pegaValores()
    let banco = localStorage.getItem("Banco")
    banco = JSON.parse(banco)

    // se email já estiver cadastrado exibe alert e não insere os dados
    for (let i = 0; i < banco.length; i++) {
      if (banco[i].dadosLogin.email == novoCadastro.dadosLogin.email) {
          return alert("Email já cadastrado")
      }
    }
    if (novoCadastro.dadosLogin.email == "") {
      return alert("Preencha os dados corretamente");
    } 
    banco.push(novoCadastro)
    banco = JSON.stringify(banco)
    localStorage.setItem("Banco", banco)

    alert(
      "Obrigada por fazer o seu cadastro " +
        novoCadastro.dadosBasicos.nome +
        "\n Você tem um(a) " +
        novoCadastro.dadosBasicos.tipo +
        " certo?" +
        "\n Seu email é " +
        novoCadastro.dadosLogin.email
    );
    limpaCampos()
    window.location.href = "./login.html"
    
}

// função que pega o cadastro dos recebedores 'R'
function cadastroR(){
    let novoCadastro = pegaValores();
    let banco = localStorage.getItem("Banco");
    banco = JSON.parse(banco);

    for (let i = 0; i < banco.length; i++) {
      if (banco[i].dadosLogin.email == novoCadastro.dadosLogin.email) {
        return alert("Email já cadastrado");
      }
    }
    if (novoCadastro.dadosLogin.email == "") {
      return alert("Preencha os dados corretamente");
    } 
    banco.push(novoCadastro);
    banco = JSON.stringify(banco);
    localStorage.setItem("Banco", banco);


    alert("Obrigada por fazer o seu cadastro " + novoCadastro.dadosBasicos.nome + "\n Você é um(a) " + novoCadastro.dadosBasicos.tipo  +" certo?"+ "\n Seu email é " + novoCadastro.dadosLogin.email)
    limpaCampos();
    window.location.href = "./login.html";

}


primeiroAcesso();