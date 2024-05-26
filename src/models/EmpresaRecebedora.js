const endereco_ER_dados = (dados) => {
    const { endereco } = dados;
    return {
        Logradouro_Er: endereco.logradouro,
        Numero_Er: endereco.numero,
        Cep_Er: endereco.CEP,
        Complemento_Er: endereco.complemento,
        Cidade_Er: endereco.cidade,
        Bairro_Er: endereco.bairro,
    }
}

const ER_dados = (dados, id_end) => {
    const { dadosBasicos, dadosLogin } = dados;
    return {
        Nome_Er: dadosBasicos.nome,
        Cnpj_Er: dadosBasicos.cnpj,
        Tipo_Er: dadosBasicos.tipo,
        Email_Er: dadosLogin.email,
        Senha_Er: dadosLogin.senha,
        Status_Er: "Ativo",
        Endereco_Er: id_end
    }
};

module.exports = {
    endereco_ER_dados,
    ER_dados
}