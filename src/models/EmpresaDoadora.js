const endereco_ED_dados = (dados) => {
    const { endereco } = dados;
    return {
        Logradouro_Ed: endereco.logradouro,
        Numero_Ed: endereco.numero,
        Cep_Ed: endereco.CEP,
        Complemento_Ed: endereco.complemento,
        Cidade_Ed: endereco.cidade,
        Bairro_Ed: endereco.bairro,
    }
}

const ED_dados = (dados, id_end) => {
    const { dadosBasicos, dadosLogin } = dados;
    return {
        Nome_Ed: dadosBasicos.nome,
        Cnpj_Ed: dadosBasicos.cnpj,
        Tipo_Ed: dadosBasicos.tipo,
        Email_Ed: dadosLogin.email,
        Senha_Ed: dadosLogin.senha,
        Status_Ed: "Ativo",
        Endereco_Ed: id_end
    }
};

module.exports = {
    endereco_ED_dados,
    ED_dados
}