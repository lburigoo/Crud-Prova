let filmes = []; 
let editandoId = null; 

function adicionarFilme() {
    let titulo = document.getElementById("titulo").value;
    let genero = document.getElementById("genero").value;
    let ano = document.getElementById("ano").value;
    let imagem = document.getElementById("imagem").value;
    let sinopse = document.getElementById("sinopse").value;

    if (titulo === "" || genero === "" || ano === "") {
        alert("Preencha título, gênero e ano!");
        return;
    }

    if (editandoId !== null) {
        let filme = filmes.find(f => f.id === editandoId);
        filme.titulo = titulo;
        filme.genero = genero;
        filme.ano = ano;
        filme.imagem = imagem;
        filme.sinopse = sinopse;
        editandoId = null; 
    } else {
           let filme = {
            id: Date.now(),
            titulo,
            genero,
            ano,
            imagem,
            sinopse
        };
        filmes.push(filme);
    }

    limparFormulario();
    mostrarFilmes();
}

function mostrarFilmes() {
    let area = document.getElementById("catalogo");
    area.innerHTML = ""; 

    filmes.forEach(filme => {
        area.innerHTML += `
            <div class="card">
                <img src="${filme.imagem || 'https://via.placeholder.com/200'}" width="200"><br>
                <h3>${filme.titulo} (${filme.ano})</h3>
                <p><b>Gênero:</b> ${filme.genero}</p>
                <p>${filme.sinopse}</p>
                <button onclick="editarFilme(${filme.id})">Editar</button>
                <button onclick="excluirFilme(${filme.id})">Excluir</button>
            </div>
        `;
    });
}

function editarFilme(id) {
    let filme = filmes.find(f => f.id === id);

    document.getElementById("titulo").value = filme.titulo;
    document.getElementById("genero").value = filme.genero;
    document.getElementById("ano").value = filme.ano;
    document.getElementById("imagem").value = filme.imagem;
    document.getElementById("sinopse").value = filme.sinopse;

    editandoId = id; 
}

function excluirFilme(id) {
    filmes = filmes.filter(f => f.id !== id);
    mostrarFilmes();
}

function limparFormulario() {
    document.getElementById("titulo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("imagem").value = "";
    document.getElementById("sinopse").value = "";
}