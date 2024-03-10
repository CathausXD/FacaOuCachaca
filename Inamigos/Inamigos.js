const mensagens = [
  "1.Quem seria capaz de inventar uma desculpa furada para evitar um compromisso chato?",
  "2.Se dessem a chance de passar a perna em uma competição sem ser pego, quem seria o primeiro a agarrar a oportunidade?",
  "3.Se tivesse a possibilidade de criar um OnlyFans sem nenhum conhecido saber, quem criaria?",
  "4.Quem seria mais rápido em quebrar uma promessa importante?",
  "5.Quem seria capaz de fingir interesse em algo só para agradar outra pessoa?",
  "6.Um de nós compartilha e acredita em fake news, quem seria?",
  "7.Vazou todas nossas conversas, quem provavelmente seria cancelado?",
  "8.Estamos BBB, quem seria o mais rejeitado pelo público?",
  "9.Estamos num apocalipse zumbi, quem vai ser o primeiro a morrer?",
  "10.Qual de nós provavelmente convidaria o grupo para una orgia?",
  "11.Quem ri quando assiste jogos paralímpicos?",
  "12.Quem é a pessoa que tem mais cara que trairia o(a) namorado(a)?",
  "13.Quem do grupo se veste pior?",
  "14.Vamos jogar um jogo novo, quem demora mais para se acostumar com as regras?",
  "15.Quem mais se masturbou ano passado?",
  "16.Ganhamos na loteria e dividimos o prêmio entre nós, quem será o primeiro a gastar todo o dinheiro?",
  "17.Quem tem cara de que não gosta de fazer sexo oral?",
  "18.Um de nós tem pensamentos exóticos com o presidente, quem?",
  "19.Um de nós secretamente deseja a morte dos outros, quem?",
  "20.Somos parte de um grupo de foragidos, a cabeça de quem que vale menos?",
  "21.Quem faz xixi na piscina?",
  "22.Todos temos medo quando o motorista da vez é?",
  "23.Um de nós acredita que a terra é plana, quem?",
  "24.Um de nós foi o modelo para a produção de brinquedos adultos, quem?",
  "25.Somos um biólogo mais inteligente do mundo, quem inventa um vírus e vende a cura?",
  "26.Qual de nós você não adotaria como filho?",
  "27.Somos protagonistas de um filme de suspensão, no final, quem é o assasino?",
  "28.Um de nós não assumiria um filho, quem?",
  "29.Se todos nós decidimos virar comediantes, quem morreria de fome?",
  "30.É possível criar clones de si mesmo, quem transaria com si mesmo?",
  "31.Um de nós está fingindo que está de boa mas está ressentido por causa de uma carta, quem?",
  "32.Um de nós tem grande chance de ser morto por dever para alguém, quem?",
  "33.Somos cúmplices de um cr1m3 e estamos sendo interrogados, quem é o primeiro a confessar?",
  "34.Não aguenta nem 5 minutos, quem?",
  "35.Somos candidatos a ter um grande cargo na república de Brasília, quem recebe menos votos?",
  "36.Um de nós está secretamente apaixonado, quem?",
  "37.Organizamos uma viagem para a praia, no último dia, quem nos deixa na mão?",
  "38.Quem se pode dizer que vai morrer virgem?",
  "39.Estamos num avião que está prestes a cair, um irá ficar sem paraquedas, quem é o primeiro a se salvar?",
  "40.Um de nós parece mais velho que o resto, quem é?",
  "41.O mais provável a mandar nudes para ficante?",
  "42.Quem é mais biscoiteiro(a)?",
  "43.Quem seria capaz de ficar com crush do(a) amigo(a)?",
  "44.Quem guarda o seu pior segredo?",
  "45.O último a perder o bv é?",
  "46.Qual de nós provavelmente seria cancelado por causa desse jogo?",
  "47.Quem se capaz de fingir que gosta de algo só para conquistar alguém?",
  "48.Quem seria mais provável a criar um perfil falso em um aplicativo de namoro para testar a fidelidade do parceiro(a)?",
  "49.Quem fingiria gostar de um presente terrível só para não magoar os sentimentos de quem deu?",
  "50.Se todos nós estivéssemos desempregados, quem seria o último a encontrar um novo emprego?",
  "51.Se alguém do grupo pudesse ter acesso aos pensamentos de todos, quem seria o mais assustado em compartilhar seus pensamentos?",
  "52.Se todos nós fôssemos competir no master chef, quem seria eliminado primeiro?",
  "53.Se tivéssemos que escolher alguém do grupo para nos representar em uma competição de dança, quem seria o escolhido?",
  "54.Se todos nós fossemos personagens de um filme de ação, quem seria o alívio cômico da história?",
  "55.Quem seria mais provável a fingir estar ocupado para evitar ajudar em alguma coisa?",
  "56.Quem de nós seria o mais provável de usar uma droga pesada?",
  "57.Quem liga menos para os outros?",
  "58.Quem é o(a) pior de bola?",
  "59.Estamos todos bêbados em uma festa, quem é o mais chato?",
  "60.Após algumas doses de bebida, quem muda de personalidade?",
  "61.O primeiro da passar mal de tanto beber?",
];

let mensagensUtilizadas = [];

function gerarMensagem() {
  if (mensagensUtilizadas.length === mensagens.length) {
    document.getElementById("mensagem").textContent =
      "Todas os desafios foram usadas!";
    return;
  }

  let mensagemAleatoria;
  do {
    mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  } while (mensagensUtilizadas.includes(mensagemAleatoria));


  document.getElementById("mensagem").textContent = mensagemAleatoria;

  mensagensUtilizadas.push(mensagemAleatoria);
}
