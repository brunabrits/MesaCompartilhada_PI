const { endereco_ED_dados, ED_dados } = require("../models/EmpresaDoadora");
const { endereco_ER_dados, ER_dados } = require("../models/EmpresaRecebedora");

const dao = require("../database/dao");

const doadores = (req, res) => {
  res.render("pages/cadastroDoadores");
};

const recebedores = (req, res) => {
  res.render("pages/cadastroRecebedores");
};

const cadastro = (req, res) => {
  const { dados, tipoEmpresa } = req.body;
  if (tipoEmpresa === "Doador") {
    const dadosEndED = endereco_ED_dados(dados);
    dao.addEnderecoED(dadosEndED, (results) => {
      const dadosEd = ED_dados(dados, results);
      dao.addED(dadosEd, (results) => {
        res.status(200).json({ message: "Cadastro realizado com sucesso!" });
        console.log(results);
      });
    });
  } else if (tipoEmpresa === "Recebedor") {
    const dadosEndER = endereco_ER_dados(dados);
    dao.addEnderecoER(dadosEndER, (results) => {
      const dadosEr = ER_dados(dados, results);
      dao.addER(dadosEr, (results) => {
        res.status(200).json({ message: "Cadastro realizado com sucesso!" });
        console.log(results);
      });
    });
  }
};

module.exports = {
  cadastro,
  doadores,
  recebedores,
};
