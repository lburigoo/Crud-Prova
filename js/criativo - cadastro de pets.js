let pets = [];

function adicionar() {
    const nome = document.getElementById('nome').value.trim();
    const raca = document.getElementById('raca').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const tutor = document.getElementById('tutor').value.trim();

    if (!nome || !raca || !idade || !tutor) {
        alert("Preencha todos os campos!");
        return;
    }

    pets.push({ nome, raca, idade, tutor, vacinado: false });

    limparCampos();
    listar();
}

function listar(lista = pets) {

    lista.sort((a, b) => a.nome.localeCompare(b.nome));

    let tabela = `
        <table>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Raça</th>
                <th>Idade</th>
                <th>Tutor</th>
                <th>Ações</th>
            </tr>
    `;

    for (let i = 0; i < lista.length; i++) {
        tabela += `
            <tr>
                <td>${i + 1}</td>
                <td>${lista[i].nome} ${lista[i].vacinado ? "🩺" : ""}</td>
                <td>${lista[i].raca}</td>
                <td>${lista[i].idade} anos</td>
                <td>${lista[i].tutor}</td>
                <td>
                    <button onclick="vacinar(${pets.indexOf(lista[i])})">🩺</button>
                    <button onclick="excluir(${pets.indexOf(lista[i])})">🗑️</button>
                </td>
            </tr>
        `;
    }

    tabela += "</table>";
    document.getElementById("lista").innerHTML = tabela;
    atualizarContador();
}

function vacinar(indice) {
    pets[indice].vacinado = !pets[indice].vacinado;
    listar();
}

function excluir(indice) {
    if (confirm(`Remover o pet ${pets[indice].nome}?`)) {
        pets.splice(indice, 1);
        listar();
    }
}

function buscar() {
    const termo = document.getElementById('pesquisa').value.toLowerCase();

    const resultado = pets.filter(pet =>
        pet.nome.toLowerCase().includes(termo) ||
        pet.raca.toLowerCase().includes(termo)
    );

    listar(resultado);
}

function atualizarContador() {
    document.getElementById('contador').innerText = pets.length;
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("raca").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("tutor").value = "";
}
