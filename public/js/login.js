function fazerLogin() {
  buscarDados()
}
const baseURL = window.location.href;
async function buscarDados(){
 const res = await fetch(baseURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value,
  }),
 })
  const data = await res.json();
 
}
