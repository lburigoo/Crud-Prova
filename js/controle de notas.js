let registros = [];
let indiceEdicao = -1;

function adicionar(){
    let aluno = document.getElementById("aluno").value;
    let disciplina = document.getElementById("disciplina").value;
    let nota = parseFloat(document.getElementById("nota").value);

    if(aluno === "" || disciplina === "" || isNaN(nota)){
        alert("Preencha todos os campos corretamente!");
        return;
    }

    registros.push({ aluno, disciplina, nota });
    limparCampos();
    listar();
}

function listar(){
    let tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    registros.forEach((registro, index) => {
        let linha = `
            <tr>
                <td>${registro.aluno}</td>
                <td>${registro.disciplina}</td>
                <td class="${registro.nota < 6 ? 'nota-baixa' : 'nota-alta'}">${registro.nota}</td>
                <td>
                    <button onclick="editar(${index})">Editar</button>
                    <button onclick="excluir(${index})">Excluir</button>
                </td>
            </tr>
        `;
        tabela.innerHTML += linha;
    });

    calcularMedia();
}

function editar(index){
    indiceEdicao = index;
    document.getElementById("aluno").value = registros[index].aluno;
    document.getElementById("disciplina").value = registros[index].disciplina;
    document.getElementById("nota").value = registros[index].nota;

    document.querySelector("button[onclick='adicionar()']").style.display = "none";
    document.getElementById("btn-atualizar").style.display = "inline-block";
}

function atualizar(){
    registros[indiceEdicao].aluno = document.getElementById("aluno").value;
    registros[indiceEdicao].disciplina = document.getElementById("disciplina").value;
    registros[indiceEdicao].nota = parseFloat(document.getElementById("nota").value);

    limparCampos();
    listar();

    document.querySelector("button[onclick='adicionar()']").style.display = "inline-block";
    document.getElementById("btn-atualizar").style.display = "none";
}

function excluir(index){
    registros.splice(index, 1);
    listar();
}

function calcularMedia(){
    if(registros.length === 0){
        document.getElementById("mediaGeral").innerText = "";
        return;
    }
    
    let soma = registros.reduce((total, r) => total + r.nota, 0);
    let media = (soma / registros.length).toFixed(2);
    
    document.getElementById("mediaGeral").innerText = `📊 Média Geral das Notas: ${media}`;
}

function limparCampos(){
    document.getElementById("aluno").value = "";
    document.getElementById("disciplina").value = "";
    document.getElementById("nota").value = "";
    indiceEdicao = -1;
}
