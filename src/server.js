const express = require("express");
const path = require("path");
const principalRoutes = require("../src/routes/principal");
const server = express();

server.use(principalRoutes);

server.use(express.static(path.join(__dirname, "../public")));

server.use((req,res)=>{
    res.sendFile(path.join(__dirname, "../public/pages/pagina404.html"));
})

server.listen(8080, () => {
  console.log("http://localhost:8080");
});
