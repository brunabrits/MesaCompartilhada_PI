const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/dashboard", (req, res) => {
  res.render("pages/dashboard")
});

router.get("/meusdados", (req, res) => {
  res.render("pages/meusdados");
})


module.exports = router;
