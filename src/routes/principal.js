const { log } = require("console");
const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
  res.render("pages/index")
});

router.get("/login", (req, res) => {
  res.render("pages/login")
});

router.get("/cadastroDoadores", (req, res)=>{
  res.render("pages/cadastroDoadores");
});

router.post("/cadastroDoadores", (req, res) => {
  const { dados, tipoEmpresa } = req.body;
  console.log(dados);
  console.log(tipoEmpresa);
});

router.get("/cadastroRecebedores", (req, res) => {
  res.render("pages/cadastroRecebedores")
});

router.post("/cadastroRecebedores", (req, res) => {
  const { dados, tipoEmpresa } = req.body;
  console.log(dados);
  console.log(tipoEmpresa);
});


module.exports = router