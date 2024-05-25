const doadores = (req, res) => {
  res.render("pages/cadastroDoadores");
};

const recebedores = (req, res) => {
  res.render("pages/cadastroRecebedores");
};

const cadastro = (req, res) => {
  const { dados, tipoEmpresa } = req.body;
  console.log(dados);
  console.log(tipoEmpresa);
};



module.exports = {
    cadastro,
    doadores,
    recebedores
}