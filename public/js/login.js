function fazerLogin() {
  buscarDados()
}
const baseURL = window.location.href;
async function buscarDados(){
 const res = await fetch(baseURL, {
  method: "GET"
 })
 console.log(res)
 
}
