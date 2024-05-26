const loginG = (req, res) => {
  res.render("pages/login");
};

const loginP = (req, res) => {
  const { email, senha } = req.body;
  console.log(email);
  console.log(senha);
}

module.exports = {
    loginG,
    loginP
}