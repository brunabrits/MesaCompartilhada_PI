const dao = require("../database/dao");
const { doacao_data } = require("../models/Doacao");

const doacaoP = (req, res) => {
    const data = req.body;
    console.log(data);
    let dataVerif = doacao_data(data);
    dao.createDoacao(dataVerif, (results) => {
        if (results) {
            res.json({ message: "Doação criada com sucesso!" });
        } else {
            res.json({ message: "Erro ao criar doação" });
        }
    });
}

module.exports = {
    doacaoP
}