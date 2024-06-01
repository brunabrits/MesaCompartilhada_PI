const { Router } = require("express");
const dao = require("../database/dao");
const path = require("path");
const router = Router();

router.get("/dashboard", (req, res) => {
  dao.getAllDoacoes((doacoes) => {
    res.render("pages/dashboard", {
      faltaDoacoes: doacoes.length === 0,
      doacoes: doacoes.length > 0 ? doacoes : null,
    });
  })
});

router.get("/meusdados", (req, res) => {
  res.render("pages/meusdados");
})


module.exports = router;
