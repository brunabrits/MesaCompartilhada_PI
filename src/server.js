const express = require("express");
const path = require("path");
const mustache = require("mustache-express")
const principalRoutes = require("./routes/principal");
const plataformaRoutes = require("./routes/plataforma")
const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));

server.engine("mustache", mustache())

server.use(express.json())

server.use(principalRoutes);

server.use(plataformaRoutes)

server.use("/", express.static(path.join(__dirname, "../public")));


server.use((req,res)=>{
    res.render("pages/pagina404");
})

server.listen(8080, () => {
  console.log("http://localhost:8080");
});
