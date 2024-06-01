

function pegaDados() {
    let nome = document.getElementById('nome').value;
    let descricao = document.getElementById('descricao').value;
    let quantidade = document.getElementById('qtd').value;
    let observacao = document.getElementById('obs').value;

    return {
        nome: nome,
        descricao: descricao,
        quantidade: quantidade,
        observacao: observacao,
        nomeEmpresa: usuario.nome,
        idEmpresa: usuario.id
    }
}

 async function criarDoacao() {
    const res = await fetch("/criarDoacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            dados: pegaDados(),
        }),
        })
            
}