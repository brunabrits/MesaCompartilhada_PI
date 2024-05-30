const dao = require("../database/dao");

const loginG = (req, res) => {
  res.render("pages/login");
};

const loginP = (req, res) => {
  const { email, senha, tipo } = req.body;
  if (tipo == "doadora"){
    dao.getEDByLogin(email, senha, (results) => {
      console.log(results);
    if (!results){
      res.json({message: "Email ou senha incorretos"});
    }else {
      let sessiondata = {cod: results.Cod_Ed, nome: results.Nome_Ed, tipo: tipo}
      res.json({message: "Usuário encontrado!", data: sessiondata});
    }
    });
  } else if (tipo == "recebedora"){
    dao.getERByLogin(email, senha, (results) => {
      console.log(results);
    if (!results){
      res.json({message: "Email ou senha incorretos"});
    }else {
      let sessiondata = {cod: results.Cod_Er, nome: results.Nome_Er, tipo: tipo}
      res.json({message: "Usuário encontrado!", data: sessiondata});
    }
    });
  } else {
    res.json({message: "Tipo de empresa inválido"});
  }
}

module.exports = {
    loginG,
    loginP
}