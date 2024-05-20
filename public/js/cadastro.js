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

function tipoUrl(){
  const urlDoador = "http://localhost:8080/cadastroDoadores";
  const urlRecebedor = "http://localhost:8080/cadastroRecebedores";
  const baseURL = window.location.href;

  let tipo;
  if (baseURL === urlDoador) {
    tipo = "Doador";
  } else if (baseURL === urlRecebedor) {
    tipo = "Recebedor";
  }
  return tipo
}

const baseURL = window.location.href;
async function postCadastro() {
  const tipo = tipoUrl()
  const dados = pegaValores();
  const res = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tipoEmpresa: tipoUrl(),
      dados: dados,
    }),
  }).then(limpaCampos());

  
}

