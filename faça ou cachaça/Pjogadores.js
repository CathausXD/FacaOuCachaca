function adicionarNomes() {
  const numJogadores = parseInt(document.getElementById("numJogadores").value);

  const nomesJogadoresDiv = document.getElementById("nomesJogadores");
  nomesJogadoresDiv.innerHTML = "";

  for (let i = 1; i <= numJogadores; i++) {
    const jogadorContainer = document.createElement("div");
    jogadorContainer.classList.add("grid-item"); // Adiciona a classe grid-item para garantir que dois elementos fiquem por linha

    const inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.placeholder = `Nome do Jogador ${i}`;
    inputNome.id = `nomeJogador${i}`;
    jogadorContainer.appendChild(inputNome);

    const selectCor = document.createElement("select");
    selectCor.id = `corJogador${i}`;
    const cores = [
      "Vermelho",
      "Verde",
      "Azul",
      "Amarelo",
      "Ciano",
      "Magenta",
      "Branco",
      "Laranja",
      "Rosa",
      "Roxo",
    ];
    cores.forEach((cor) => {
      const option = document.createElement("option");
      option.value = cor.toLowerCase();
      option.textContent = cor;
      selectCor.appendChild(option);
    });
    jogadorContainer.appendChild(selectCor);

    nomesJogadoresDiv.appendChild(jogadorContainer);
  }

  const iniciarJogoBtn = document.createElement("button");
  iniciarJogoBtn.textContent = "Iniciar Jogo";
  iniciarJogoBtn.onclick = iniciarJogo;
  nomesJogadoresDiv.appendChild(iniciarJogoBtn);
}

function iniciarJogo() {
  const numJogadores = parseInt(document.getElementById("numJogadores").value);
  const nomes = [];
  const cores = [];

  for (let i = 1; i <= numJogadores; i++) {
    const nome = document.getElementById(`nomeJogador${i}`).value.trim();
    const cor = document.getElementById(`corJogador${i}`).value;
    if (nome !== "") {
      nomes.push(nome);
      cores.push(cor);
    }
  }

  if (nomes.length === 0) {
    alert("Por favor, insira pelo menos um nome de jogador.");
    return;
  }

  localStorage.setItem("numJogadores", numJogadores);
  localStorage.setItem("nomes", JSON.stringify(nomes));
  localStorage.setItem("cores", JSON.stringify(cores));

  window.location.href = "FOC.html";
}
