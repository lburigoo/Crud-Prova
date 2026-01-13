let numeros = []
function adicionar(){

    let nome = document.getElementById("nome").value
    let numero = document.getElementById("numero").value
    let email = document.getElementById("email").value

    if(nome === "" || numero === "" || email === ""){
        alert("Preencha todos os campos!")
        return
    }

    numeros.push({nome, numero, email});
    listar()
}
function listar() {
    // Ordena os contatos em ordem alfabética pelo nome
    numeros.sort((a, b) => a.nome.localeCompare(b.nome));

    let tabela = `
        <table>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Numero</th>
                <th>Email</th>
                <th>Ações</th>
            </tr>
    `;

    for (let i = 0; i < numeros.length; i++) {
        tabela += `
            <tr>
                <td>${i + 1}</td>
                <td>${numeros[i].nome}</td>
                <td>${numeros[i].numero}</td>
                <td>${numeros[i].email}</td>
                <td>
                    <button onclick = "editar(${i})">📝</button>
                    <button onclick = "excluir(${i})">🗑️</button>
                </td>
            </tr>
        `;
    }

    tabela += "</table>";
    document.getElementById("listaContatos").innerHTML = tabela;
}
function pesquisar(){
    
    let termo = document.querySelector(".input-area input").value.toLowerCase();

    let tabela = `
        <table>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Número</th>
                <th>Email</th>
                <th>Ações</th>
            </tr>
    `;

    for(let i = 0; i < numeros.length; i++){
        if(
            numeros[i].nome.toLowerCase().includes(termo) || 
            numeros[i].numero.includes(termo) || 
            numeros[i].email.toLowerCase().includes(termo)
        ){
            tabela += `
            <tr>
                <td>${i + 1}</td>
                <td>${numeros[i].nome}</td>
                <td>${numeros[i].numero}</td>
                <td>${numeros[i].email}</td>
                <td>
                    <button onclick="editar(${i})">📝</button>
                    <button onclick="excluir(${i})">🗑️</button>
                </td>
            </tr>
            `;
        }
    }

    tabela += "</table>";
    document.getElementById("listaContatos").innerHTML = tabela;
}
function editar(indice){
    const novoContato = prompt("Novo Contato:", numeros[indice].nome)
    const novoNumero = prompt("Novo número", numeros[indice].numero)
    const novoEmail = prompt("Novo e-mail", numeros[indice].email)

    if(novoContato && novoNumero && novoEmail !== null){
        numeros[indice] = { nome: novoContato, numero: novoNumero, email: novoEmail};
        listar()
    }
}
function excluir(indice){
    if(confirm(`Remover o contato ${numeros[indice].numero}?`)){
        numeros.splice(indice, 1);
        listar();
    }
}
function limparCampos(){

   document.getElementById("nome").value = "";
   document.getElementById("numero").value = "";
   document.getElementById("email").value = "";
}
