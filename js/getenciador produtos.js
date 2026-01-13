let lista = [];

function adicionar() {
    let produto = document.getElementById('produtos').value;
    let preco = document.getElementById('precos').value;

    if (produto === "") {
        alert("Preencha o campo Produtos!");
        return;
    }

    lista.push({ produtos: produto, preco: preco });
    listar();


    document.getElementById('produtos').value = "";
    document.getElementById('precos').value = "";
}

function listar() {
    let filtro = document.getElementById('filtrar').value.toLowerCase(); 

    let tabela = `
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Ações</th>
            </tr>
    `;

    
    for (let id = 0; id < lista.length; id++) {
        let nome = lista[id].produtos.toLowerCase();

        if (nome.includes(filtro)) { 
            tabela += `
                <tr>
                    <td>${id + 1}</td>
                    <td>${lista[id].produtos}</td>
                    <td>R$ ${lista[id].preco}</td>
                    <td>
                        <button onclick="Editar(${id})">📝</button>
                        <button onclick="Excluir(${id})">🗑️</button>
                    </td>
                </tr>
            `;
        }
    }

    tabela += "</table>";
    document.getElementById("gerenciador").innerHTML = tabela;
}

function Editar(indice) {
    const NovoProduto = prompt("Novo produto:", lista[indice].produtos);

    if (NovoProduto !== null && NovoProduto.trim() !== "") {
        lista[indice].produtos = NovoProduto;
        listar();
    }
}

function Excluir(indice) {
    if (confirm(`Remover produto ${lista[indice].produtos}?`)) {
        lista.splice(indice, 1);
        listar();
    }
}