const { log } = require("console");
const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/pages/index.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/pages/login.html"));
});

router.get("/cadastroDoadores", (req, res)=>{
  res.sendFile(path.join(__dirname, "../../public/pages/cadastroDoadores.html"));
});

router.post("/cadastroDoadores", (req, res) => {
  const { dados, tipoEmpresa } = req.body;
  console.log(dados);
  console.log(tipoEmpresa);
});

router.get("/cadastroRecebedores", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../public/pages/cadastroRecebedores.html")
  );
});

router.post("/cadastroRecebedores", (req, res) => {
  const { dados, tipoEmpresa } = req.body;
  console.log(dados);
  console.log(tipoEmpresa);
});


module.exports = router