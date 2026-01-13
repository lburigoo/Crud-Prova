
function listar() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const resultado = document.querySelector(".resultado");


  if (!resultado.innerHTML.includes("<table")) {
    resultado.innerHTML = `
      <table>
        <tr>
          <th> Nome </th>
          <th>  Idade </th>
          <th> E-mail </th>
          <th> Senha </th>
        </tr>
      </table>
    `;
  }

  const tabela = resultado.querySelector("table");
  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td>${nome}</td>
    <td>${idade}</td>
    <td>${email}</td>
    <td>${senha}</td>
  `;

  tabela.appendChild(linha);

  
}


document.getElementById("finalizar").addEventListener("click", listar);
