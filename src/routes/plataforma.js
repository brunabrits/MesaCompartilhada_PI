const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/pages/dashboard.html"));
});


module.exports = router;
