const mysql = require("mysql");
// instalar: npm i mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "MESA_COMPARTILHADA",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: ", err);
    return;
  }
  console.log("Conexão estabelecida com o banco de dados");
});

module.exports = connection;
