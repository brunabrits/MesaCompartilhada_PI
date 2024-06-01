let sessao = sessionStorage.getItem("usuario");

if (!sessao) {
  window.location.href = "/login";
}

let usuario = JSON.parse(sessao);
if (usuario.tipo == "recebedora") {
  let btn_criar = document.getElementById("btn_criar");
  btn_criar.style.display = "none";
}

function logout() {
  sessionStorage.removeItem("usuario");
  window.location.href = "/";
}
