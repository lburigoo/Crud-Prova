let veiculos = [];

function adicionar() {
    const marca = document.getElementById('marca').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const ano = parseInt(document.getElementById('ano').value.trim());
    const cor = document.getElementById('cor').value.trim();

    
    if (!marca || !modelo || !ano || !cor) {
        alert("Preencha todos os campos!");
        return;
    }

   
    const anoAtual = new Date().getFullYear();
    if (ano < 1900 || ano > anoAtual) {
        alert(`Ano inválido! O ano deve estar entre 1900 e ${anoAtual}.`);
        return;
    }

    veiculos.push({ marca, modelo, ano, cor, vendido: false });

    limparCampos();
    listar();
}

function listar(lista = veiculos) {

    lista.sort((a, b) => a.ano - b.ano);

    let tabela = `
        <table>
            <tr>
                <th>#</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Cor</th>
                <th>Ações</th>
            </tr>
    `;

    for (let i = 0; i < lista.length; i++) {
        tabela += `
            <tr>
                <td>${i + 1}</td>
                <td>${lista[i].marca}</td>
                <td>${lista[i].modelo} ${lista[i].vendido ? "🚘" : ""}</td>
                <td>${lista[i].ano}</td>
                <td>${lista[i].cor}</td>
                <td>
                    <button onclick="marcarVendido(${veiculos.indexOf(lista[i])})">🚘</button>
                    <button onclick="excluir(${veiculos.indexOf(lista[i])})">🗑️</button>
                </td>
            </tr>
        `;
    }

    tabela += "</table>";
    document.getElementById("lista").innerHTML = tabela;
}

function marcarVendido(indice) {
    veiculos[indice].vendido = !veiculos[indice].vendido;
    listar();
}

function excluir(indice) {
    if (confirm(`Remover o veículo ${veiculos[indice].marca} ${veiculos[indice].modelo}?`)) {
        veiculos.splice(indice, 1);
        listar();
    }
}

function buscar() {
    const termo = document.getElementById('pesquisaMarca').value.trim().toLowerCase();
    
    const resultado = veiculos.filter(v => v.marca.toLowerCase().includes(termo));
    
    listar(resultado);
}

function limparCampos() {
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("cor").value = "";
}