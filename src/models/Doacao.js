const doacao_data = (data) => {
    return {
      Nome_Doacao: data.dados.nome,
      Nome_Doadora: data.dados.nomeEmpresa,
      Desc_Doacao: data.dados.descricao,
      Qtd_Doacao: data.dados.quantidade,
      Status_Doacao: "Disponível",
      Observacao_Doacao: data.dados.observacao,
      Cod_Ed: data.dados.idEmpresa,
    };
}

module.exports = {
    doacao_data
}
