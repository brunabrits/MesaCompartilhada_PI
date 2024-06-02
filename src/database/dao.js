const connection = require("../database/db");

function getAllUsers(callback) {
  connection.query("SELECT * FROM DOACAO", (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(results);
    }
  });
}
// Carrega todos os usuarios na tabela do banco
// arrow function =>

function getUserById(id, callback) {
  connection.query(
    "SELECT * FROM Usuarios WHERE id_usuario = ?",
    [id],
    (error, results, fields) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results[0]);
      }
    }
  );
}
//

function addUser(user, callback) {
  connection.query(
    "INSERT INTO Usuarios SET ?",
    user,
    (error, results, fields) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results.insertId);
      }
    }
  );
}

function updateUser(id, user, callback) {
  connection.query(
    "UPDATE Usuarios SET ? WHERE id = ?",
    [user, id],
    (error, results, fields) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results.affectedRows);
      }
    }
  );
}

function deleteUser(id, callback) {
  connection.query(
    "DELETE FROM Usuarios WHERE id = ?",
    [id],
    (error, results, fields) => {
      if (error) {
        callback(null);
      } else {
        callback(results.affectedRows);
      }
    }
  );
}

function addED(user, callback) {
  connection.query(
    "INSERT INTO Empresa_Doadora SET ?",
    user,
    (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results.insertId);
      }
    }
  );
}

function addEnderecoED(endereco, callback) {
  connection.query(
    "INSERT INTO ENDERECO_ED SET ?",
    endereco,
    (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results.insertId);
      }
    }
  );
}

function addER(user, callback) {
  connection.query(
    "INSERT INTO Empresa_Recebedora SET ?",
    user,
    (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results.insertId);
      }
    }
  );
}

function addEnderecoER(endereco, callback) {
  connection.query(
    "INSERT INTO ENDERECO_ER SET ?",
    endereco,
    (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results.insertId);
      }
    }
  );
}

function getEDByLogin(email, senha, callback) {
  connection.query(
    "SELECT * FROM Empresa_Doadora WHERE Email_Ed = ? AND Senha_Ed = ?",
    [email, senha],
    (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results[0]);
      }
    }
  );
}

function getERByLogin(email, senha, callback) {
  connection.query(
    "SELECT * FROM Empresa_Recebedora WHERE Email_Er = ? AND Senha_Er = ?",
    [email, senha],
    (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results[0]);
      }
    }
  );
}

function getAllDoacoes(callback) {
  connection.query("SELECT * FROM DOACAO", (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(results);
    }
  });
}

function createDoacao(doacao, callback) {
  connection.query(
    "INSERT INTO DOACAO SET ?",
    doacao,
    (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(results.insertId);
      }
    }
  );
}


module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  addED,
  addEnderecoED,
  addER,
  addEnderecoER,
  getEDByLogin,
  getERByLogin,
  getAllDoacoes,
  createDoacao,
};
