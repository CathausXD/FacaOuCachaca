const mensagens = [
    "1.Quem de nós seria o mais provável de usar uma droga pesada?",
    "2.O mais provável a mandar nudes para ficante?",
    "3.Quem seria capaz de ficar com crush do(a) amigo(a)?",
    "4.Quem se pode dizer que vai morrer virgem?",
    "5.Não aguenta nem 5 minutos, quem?",
    "6.É possível criar clones de si mesmo, quem transaria com si mesmo?",
    "7.Um de nós não assumiria um filho, quem?",
    "8.Um de nós foi o modelo para a produção de brinquedos adultos, quem?",
    "9.Um de nós secretamente deseja a morte dos outros, quem?",
    "10.Quem tem cara de que não gosta de fazer sexo oral?",
    "11.Um de nós tem pensamentos exóticos com o presidente, quem?",
    "12.Quem mais se masturbou ano passado?",
    "13.Quem é a pessoa que tem mais cara que trairia o(a) namorado(a)?",
    "14.Qual de nós provavelmente convidaria o grupo para una orgia?",
    "15.Se tivesse a possibilidade de criar um OnlyFans sem nenhum conhecido saber, quem criaria?",
    "16.Quem seria o mais provável de se envolver em atividades ilegais?",
    "17.Quem teria mais chances de se tornar viciado em álcool ou drogas?",
    "18.Quem seria o mais propenso a manipular os sentimentos de alguém para seu próprio benefício?",
    "19.Se tivéssemos que escolher alguém para cometer um ato ilegal por dinheiro, quem seria escolhido?",
    "20.Quem seria o mais provável a cometer um crime grave por impulso?",
    "21.Quem teria mais chances de mentir em uma situação séria para se safar de responsabilidades?",
    "22.Quem do grupo seria mais propenso a ter uma noite quente com um estranho em uma festa?",
    "23.Quem teria mais chances de experimentar uma fantasia sexual diferente e incomum?",
    "24.Se um de nós tivesse a oportunidade de participar de uma festa swinger, quem seria o mais tentado?",
    "25.Quem do grupo seria mais propenso a ter um relacionamento aberto?",
    "26.Se tivéssemos que escolher alguém para participar de um ensaio fotográfico sensual, quem seria escolhido?",
    "27.Quem do grupo é o mais submisso na intimidade?",
    "28.Quem do grupo teria mais chances de protagonizar um vídeo viral de internet?",
    "29.Quem é o mais mentiroso?",
    "30.Quem do grupo seria o mais provável a ter um segredo vergonhoso que ninguém conhece?",
    "31.Quem seria o 'padrinho/madrinha' do grupo se todos virassem viciados em drogas?",
    "32.Quem seria o 'rei/rainha do drama' do grupo?",
    "33.Quem seria o melhor amigo para se ter em um momento difícil?",
    "34.Você está em um reality show e precisa escolher um dos seus amigos para ser eliminado. Quem você escolheria?",
    "35.Quem de vocês seria capaz de comer um prato exótico, como olho de cabra ou cérebro de porco?",
    "36.Quem seria capaz de passar 24 horas sem usar o celular?",
    "37.Quem é o mais gentil?",
    "38.Quem do grupo seria mais propenso a perdoar uma traição amorosa?",
    "39.Quem do grupo teria mais chances de se apaixonar por um(a) amigo(a) de longa data?",
    "40.Quem do grupo seria o mais propenso a trair um amigo próximo por interesse pessoal?",
    "41.Se um de vocês tivesse a oportunidade, quem seria o mais provável de se tornar um stripper por um dia?",
    "42.Quem é mais propenso a ter uma queda por alguém do mesmo sexo, mas nunca admitiu?",
    "43.Quem do grupo teria mais chances de fazer uma cirurgia plástica para mudar a aparência?",
    "44.Quem é mais provável de ter um(a) ex que ainda nutre sentimentos por ele(a)?",
    "45.Se um de vocês fosse um líder de um país, quem seria o mais provável a iniciar uma guerra por motivos pessoais?",
    "46.Quem do grupo seria mais propenso a se casar por pressão da família, mesmo não estando apaixonado(a)?",
    "47.Se vazar as conversas do WhatsApp, quem perderar todos os amigos?",
    "48.Com quem você não gostaria de morar junto?",
    "49.Vamos organizar uma festa, quem é o mais preguiçoso que não faz nada?",
    "50.Quem faz promessas da boca pra fora?",
    "51.Quem do grupo é mais propenso a fofocar e espalhar boatos prejudiciais?",
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