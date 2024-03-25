const mensagens = [
  "1.Quem seria capaz de inventar uma desculpa furada para evitar um compromisso chato?",
  "2.Se dessem a chance de passar a perna em uma competição sem ser pego, quem seria o primeiro a agarrar a oportunidade?",
  "3.Quem seria mais rápido em quebrar uma promessa importante?",
  "4.Quem seria capaz de fingir interesse em algo só para agradar outra pessoa?",
  "5.Um de nós compartilha e acredita em fake news, quem seria?",
  "6.Vazou todas nossas conversas, quem provavelmente seria cancelado?",
  "7.Estamos BBB, quem seria o mais rejeitado pelo público?",
  "8.Estamos num apocalipse zumbi, quem vai ser o primeiro a morrer?",
  "9.Quem ri quando assiste jogos paralímpicos?",
  "10.Quem do grupo se veste pior?",
  "11.Vamos jogar um jogo novo, quem demora mais para se acostumar com as regras?",
  "12.Ganhamos na loteria e dividimos o prêmio entre nós, quem será o primeiro a gastar todo o dinheiro?",
  "13.Somos parte de um grupo de foragidos, a cabeça de quem que vale menos?",
  "14.Quem faz xixi na piscina?",
  "15.Todos temos medo quando o motorista da vez é?",
  "16.Um de nós acredita que a terra é plana, quem?",
  "17.Somos um biólogo mais inteligente do mundo, quem inventa um vírus e vende a cura?",
  "18.Qual de nós você não adotaria como filho?",
  "19.Somos protagonistas de um filme de suspensão, no final, quem é o assasino?",
  "20.Se todos nós decidimos virar comediantes, quem morreria de fome?",
  "21.Um de nós está fingindo que está de boa mas está ressentido por causa de uma carta, quem?",
  "22.Um de nós tem grande chance de ser morto por dever para alguém, quem?",
  "23.Somos cúmplices de um cr1m3 e estamos sendo interrogados, quem é o primeiro a confessar?",
  "24.Somos candidatos a ter um grande cargo na república de Brasília, quem recebe menos votos?",
  "25.Um de nós está secretamente apaixonado, quem?",
  "26.Organizamos uma viagem para a praia, no último dia, quem nos deixa na mão?",
  "27.Estamos num avião que está prestes a cair, um irá ficar sem paraquedas, quem é o primeiro a se salvar?",
  "28.Um de nós parece mais velho que o resto, quem é?",
  "29.Quem é mais biscoiteiro(a)?",
  "30.Quem guarda o seu pior segredo?",
  "31.O último a perder o bv é?",
  "32.Qual de nós provavelmente seria cancelado por causa desse jogo?",
  "33.Quem seria capaz de fingir que gosta de algo só para conquistar alguém?",
  "34.Quem seria mais provável a criar um perfil falso em um aplicativo de namoro para testar a fidelidade do parceiro(a)?",
  "35.Quem fingiria gostar de um presente terrível só para não magoar os sentimentos de quem deu?",
  "36.Se todos nós estivéssemos desempregados, quem seria o último a encontrar um novo emprego?",
  "37.Se alguém do grupo pudesse ter acesso aos pensamentos de todos, quem seria o mais assustado em compartilhar seus pensamentos?",
  "38.Se todos nós fôssemos competir no master chef, quem seria eliminado primeiro?",
  "39.Se tivéssemos que escolher alguém do grupo para nos representar em uma competição de dança, quem seria o escolhido?",
  "40.Se todos nós fossemos personagens de um filme de ação, quem seria o alívio cômico da história?",
  "41.Quem seria mais provável a fingir estar ocupado para evitar ajudar em alguma coisa?",
  "42.Quem liga menos para os outros?",
  "43.Quem é o(a) pior de bola?",
  "44.Estamos todos bêbados em uma festa, quem é o mais chato?",
  "45.Após algumas doses de bebida, quem muda de personalidade?",
  "46.O primeiro da passar mal de tanto beber?",
  "47.Quem seria mais propenso a se inscrever em um reality show para ganhar fama?",
  "48.Quem seria o primeiro a fazer uma aposta arriscada em um jogo de azar?",
  "49.Se um de nós tivesse a oportunidade de trocar de identidade por um dia, quem faria isso?",
  "50.Se tivéssemos que escolher alguém para liderar uma expedição perigosa, quem seria o líder mais adequado?",
  "51.Quem seria mais propenso a se envolver em uma conspiração para ganhar poder?",
];

let mensagensUtilizadas =
  JSON.parse(localStorage.getItem("mensagensUtilizadas")) || [];
let ultimaMensagemExibida = localStorage.getItem("ultimaMensagemExibida") || "";

function gerarMensagem() {
  let mensagemAleatoria;

  // Verifica se todas as mensagens foram utilizadas
  if (mensagensUtilizadas.length === mensagens.length) {
    mensagemAleatoria = "Todas os desafios foram usadas!";
  } else {
    // Gera uma mensagem aleatória que não foi utilizada ainda
    do {
      mensagemAleatoria =
        mensagens[Math.floor(Math.random() * mensagens.length)];
    } while (mensagensUtilizadas.includes(mensagemAleatoria));
  }

  document.getElementById("mensagem").textContent = mensagemAleatoria;

  // Atualiza a última mensagem exibida no localStorage
  ultimaMensagemExibida = mensagemAleatoria;
  localStorage.setItem("ultimaMensagemExibida", ultimaMensagemExibida);

  if (mensagemAleatoria !== "Todas os desafios foram usadas!") {
    mensagensUtilizadas.push(mensagemAleatoria);
    localStorage.setItem(
      "mensagensUtilizadas",
      JSON.stringify(mensagensUtilizadas)
    ); // Salva as mensagens utilizadas no localStorage
  }
}

// Chama a função para gerar a mensagem ao carregar a página
if (ultimaMensagemExibida) {
  document.getElementById("mensagem").textContent = ultimaMensagemExibida;
}
// Adiciona um evento de clique ao botão para gerar uma nova mensagem
document.getElementById("gerarBtn").addEventListener("click", gerarMensagem);
