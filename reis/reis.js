//scroll baixo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 75) {
    document.getElementById("logo").classList.add("logopequena");
  } else {
    document.getElementById("logo").classList.remove("logopequena");
  }
}

// Array para armazenar as combinações já utilizadas
let modoEsgotamento = false;
const combinacoesUtilizadas = [];

function toggleModo() {
  modoEsgotamento = !modoEsgotamento;
  const modoBtn = document.getElementById("modoBtn");
  modoBtn.textContent = modoEsgotamento ? "Modo: Finito" : "Modo: Infinito";
  modoBtn.classList.toggle("modo-ativo");
}

// Função para gerar um número aleatório entre min e max, inclusive
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Função para gerar uma carta aleatória
function gerarCarta() {
  // Array de números, naipes e cores
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const naipes = ["copas", "ouros", "espadas", "paus"];
  const cores = ["azul", "vermelho"];

  // Mensagens associadas a cada número
  const mensagens = {
    A: "Todos jogadores bebem até quem pegou pare de beber",
    2: "O jogador que pegou a carta escolhe alguém para beber um gole",
    3: "O jogador que pegou a carta bebe um gole",
    4: "Todos devem tocar o chão, a última pessoa a tocar bebe um gole",
    5: "Todos os homens bebem",
    6: "Todas as mulheres bebem",
    7: "Todos devem levantar as mãos, o último bebe",
    8: "O jogador que pegou a carta e um jogador a escolha bebem",
    9: "O jogador diz uma palavra e todos devem dizer uma palavra que rima, se não bebe",
    10: "O jogador escolhe uma categoria e todo mundo tem que dizer algo dessa categoria até alguém perder",
    J: "Eu nunca",
    Q: "Faça uma pergunta que você saiba a resposta para outro jogador, se ele responder errado bebe",
    K: "Crie uma nova regra",
  };

  // Verifica se todas as combinações possíveis foram esgotadas
  if (
    modoEsgotamento &&
    combinacoesUtilizadas.length ===
      numeros.length * naipes.length * cores.length
  ) {
    document.getElementById("result").textContent =
      "Todas as cartas foram usadas!";
    return;
  }

  // Embaralhar os naipes e cores para evitar repetições
  const naipesEmbaralhados = shuffleArray(naipes);
  const coresEmbaralhadas = shuffleArray(cores);

  // Escolha aleatória de um número, naipe e cor
  const numeroAleatorio = numeros[randomNumber(0, numeros.length - 1)];
  const naipeAleatorio = naipesEmbaralhados.pop(); // Remover o naipe escolhido
  const corAleatoria = coresEmbaralhadas.pop(); // Remover a cor escolhida

  // Atualizar o texto do elemento <div> com o número escolhido e sua mensagem associada
  const mensagem = mensagens[numeroAleatorio];
  document.getElementById("numero").textContent = numeroAleatorio;
  document.getElementById("descricao").textContent = mensagem;

  // Adiciona uma classe correspondente à cor sorteada
  const numeroDiv = document.querySelector(".numero");
  numeroDiv.className = "numero " + corAleatoria;

  const cardDiv = document.querySelector(".card");
  cardDiv.className = "card " + corAleatoria;

  // Construir o caminho da imagem com base no naipe e cor escolhidos
  const imagePath = `/naipes/${naipeAleatorio}_${corAleatoria}.svg`;

  // Criar um elemento de imagem
  const imgElement = document.createElement("img");
  imgElement.src = imagePath;

  // Limpar o conteúdo anterior antes de adicionar a nova imagem
  const resultDiv = document.getElementById("imagem");
  resultDiv.innerHTML = "";
  resultDiv.appendChild(imgElement);

  // Adicionar a combinação utilizada ao array de combinações
  combinacoesUtilizadas.push(
    `${numeroAleatorio}_${naipeAleatorio}_${corAleatoria}`
  );

  document.getElementById("modoBtn").disabled = true;
  modoBtn.classList.add("sumiu");
}
