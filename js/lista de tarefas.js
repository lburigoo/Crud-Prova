let tare = [];

window.onload = function() {
    if (localStorage.getItem("tarefas")) {
        tare = JSON.parse(localStorage.getItem("tarefas"));
        listar();
    }
};

function salvarLocalStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tare));
}

function adicionar(){
    const tarefa = document.getElementById('tarefa').value;

    if (tarefa === ""){
        alert("Preencha o campo tarefa!")
        return;
    }
     
    const data = new Date();
    const dataCriacao = data.toLocaleString();

    
    tare.push({ tarefa: tarefa, concluida: false, data: dataCriacao })
    salvarLocalStorage();
    listar()
}
function listar(){

    let tabela = `

        <table>

            <tr>
                <th>#</th>
                <th>Tarefa</th>
                <th>Ações</th>
            </tr>
`;
for (let id = 0; id < tare.length; id++){

    let textoTarefa = tare[id].tarefa;
        if (tare[id].concluida) {
            textoTarefa += " ✅";
        }

    tabela += `

        <tr>
            <td>${id + 1}</td>
            <td>${textoTarefa}</td>
            <td>
                <button onclick="Editar(${id})">📝</button>
                <button onclick="Excluir(${id})">🗑️</button>
                <button onclick="Concluida(${id})">✅</button>
            </td>
        </tr> `;
}      
tabela += "<table>"
document.getElementById("lista").innerHTML = tabela
    
}
function Editar(indice){
    const novaTarefa = prompt("Nova tarefa:",tare[indice].tarefa);

    if (novaTarefa !== null) {
        tare[indice] = { tarefa: novaTarefa};
        
        salvarLocalStorage()
        listar();
    }
}
function Excluir(indice){

    if (confirm (`Remover tarefa ${tare[indice].tarefa}?`)){
        tare.splice(indice, 1);
        
        salvarLocalStorage()
        listar()
    }
}
function Concluida(indice){
 
    if (confirm(`Marcar como concluída: ${tare[indice].tarefa}?`)) {
        tare[indice].concluida = true ;
    }
        
        salvarLocalStorage()
        listar()
}


