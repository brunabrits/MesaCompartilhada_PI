const { log } = require("console");
const { Router } = require("express");
const cadastroController = require("../controllers/cadastroController")
const loginController = require("../controllers/loginController")
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
  res.render("pages/index")
});
router.get("/login", loginController.loginG);
router.post("/login", loginController.loginP);
router.get("/cadastroDoadores", cadastroController.doadores);
router.get("/cadastroRecebedores", cadastroController.recebedores);



router.post("/cadastroDoadores", cadastroController.cadastro);
router.post("/cadastroRecebedores", cadastroController.cadastro);


module.exports = router