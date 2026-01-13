let receitas = [];
let indiceEdicao = -1;

function adicionar() {
  let nome = document.getElementById("nome").value;
  let ingredientes = document.getElementById("ingredientes").value;
  let preparo = document.getElementById("preparo").value;

  if (nome === "" || ingredientes === "" || preparo === "") {
    alert("Preencha todos os campos!");
    return;
  }

  receitas.push({ nome, ingredientes, preparo });
  limparCampos();
  listar();
}

function listar(listaFiltrada = receitas) {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  listaFiltrada.forEach((receita, index) => {
    let card = `
      <div class="card">
        <h3>${receita.nome}</h3>
        <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
        <p><strong>Preparo:</strong> ${receita.preparo}</p>
        <div class="botoes">
          <button onclick="editar(${index})">Editar</button>
          <button onclick="excluir(${index})">Excluir</button>
        </div>
      </div>
    `;
    lista.innerHTML += card;
  });
}

function editar(index) {
  indiceEdicao = index;
  document.getElementById("nome").value = receitas[index].nome;
  document.getElementById("ingredientes").value = receitas[index].ingredientes;
  document.getElementById("preparo").value = receitas[index].preparo;

  document.querySelector("button[onclick='adicionar()']").style.display = "none";
  document.getElementById("btn-atualizar").style.display = "inline-block";
}

function atualizar() {
  receitas[indiceEdicao].nome = document.getElementById("nome").value;
  receitas[indiceEdicao].ingredientes = document.getElementById("ingredientes").value;
  receitas[indiceEdicao].preparo = document.getElementById("preparo").value;

  limparCampos();
  listar();

  document.querySelector("button[onclick='adicionar()']").style.display = "inline-block";
  document.getElementById("btn-atualizar").style.display = "none";
}

function excluir(index) {
  receitas.splice(index, 1);
  listar();
}

function buscarIngrediente() {
  let busca = document.getElementById("buscaIngrediente").value.toLowerCase();
  
  let filtradas = receitas.filter(receita =>
    receita.ingredientes.toLowerCase().includes(busca)
  );

  listar(filtradas);
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("ingredientes").value = "";
  document.getElementById("preparo").value = "";
  indiceEdicao = -1;
}
