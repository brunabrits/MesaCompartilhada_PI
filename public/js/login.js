function pegaDados() {
  let email = document.getElementById("email").value
  let senha = document.getElementById("senha").value;
  let ele = document.getElementsByName("empresa");
  let tipoclicado;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      tipoclicado = ele[i].id;
    }
  }


  return {
    email: email,
    senha: senha,
    tipo: tipoclicado,
  };
  }



function fazerLogin() {
  buscarDados();
}
const baseURL = window.location.href;
async function buscarDados() {
  const res = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pegaDados()),
  });
  const data = await res.json();
  if (data.data){
    sessionStorage.setItem("usuario", JSON.stringify(data.data));
    window.location.href = "/dashboard";
  }
  alert(data.message);
}
