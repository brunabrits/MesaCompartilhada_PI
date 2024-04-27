const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/pages/index.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/pages/login.html"));
});


module.exports = router