let livros = [];

function adicionar() {
    const titulo = document.getElementById('titulo').value.trim();
    const autor = document.getElementById('autor').value.trim();
    const ano = document.getElementById('ano').value.trim();

    if (!titulo || !autor || !ano) {
        alert("Preencha todos os campos!");
        return;
    }

    // Bloquear títulos duplicados
    const existe = livros.some(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    if (existe) {
        alert("Esse livro já está cadastrado!");
        return;
    }

    livros.push({ titulo, autor, ano, lido: false });
    limparCampos();
    listar();
}

function listar(lista = livros) {
    let tabela = `
        <table>
            <tr>
                <th>#</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Ano</th>
                <th>Ações</th>
            </tr>
    `;

    for (let i = 0; i < lista.length; i++) {
        tabela += `
            <tr>
                <td>${i + 1}</td>
                <td>${lista[i].titulo} ${lista[i].lido ? "📘" : ""}</td>
                <td>${lista[i].autor}</td>
                <td>${lista[i].ano}</td>
                <td>
                    <button onclick="marcarLido(${livros.indexOf(lista[i])})">📘</button>
                    <button onclick="excluir(${livros.indexOf(lista[i])})">🗑️</button>
                </td>
            </tr>
        `;
    }

    tabela += "</table>";
    document.getElementById("lista").innerHTML = tabela;
}

function filtrar(tipo) {
    if (tipo === "lidos") {
        listar(livros.filter(livro => livro.lido));
    } else if (tipo === "naoLidos") {
        listar(livros.filter(livro => !livro.lido));
    } else {
        listar();
    }
}

function marcarLido(indice) {
    livros[indice].lido = !livros[indice].lido;
    listar();
}

function excluir(indice) {
    if (confirm(`Remover o livro "${livros[indice].titulo}"?`)) {
        livros.splice(indice, 1);
        listar();
    }
}

function limparCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("ano").value = "";
}
