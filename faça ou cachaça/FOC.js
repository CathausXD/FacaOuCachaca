// Array de mensagens
const mensagens = [
  "1.Compartilhe a foto de alguém nos stories ou CACHAÇA",
  "2.Comente algo na última publicação da primeira pessoa que aparecer no feed do Instagram ou CACHAÇA",
  "3.Passar um trote para algum amigo que não está jogando ou CACHAÇA",
  "4.Mostrar para o grupo o que falou nas três últimas conversas do WhatsApp ou CACHAÇA",
  "5.Mostrar para o grupo as cinco últimas fotos da só pra mim do snap do celular ou CACHAÇA",
  "6.Dizer a alguma pessoa do grupo qual o maior defeito dela ou CACHAÇA",
  "7.Contar com qual pessoa que você já ficou e ninguém sabe ou CACHAÇA",
  "8.Falar eu te amo para uma pessoa aleatória ou CACHAÇA",
  "9.Imitar o jeito de falar e andar de alguém do grupo ou CACHAÇA",
  "10.Beber alguma mistura feita pelo grupo ou CACHAÇA",
  "11.Mostrar ao grupo seu histórico de pesquisas mais recentes no Google ou CACHAÇA",
  "12.Escolher um amigo na brincadeira para fazer uma competição de quem bebe 500ml de água mais rápido. Quem perde, bebe CACHAÇA",
  "13.Contar duas mentiras e uma verdade sobre sua vida amorosa e deixar o grupo na dúvida sobre qual é qual ou CACHAÇA",
  "14.Ligar para alguém e fingir que você é um famoso ou CACHAÇA",
  "15.Tentar cantar uma música famosa em outro idioma sem olhar a letra ou CACHAÇA",
  "16.Fazer uma careta por 30 segundos sem parar ou CACHAÇA",
  "17.Tentar imitar o sotaque de um personagem famoso por um minuto ou CACHAÇA",
  "18.Fazer uma imitação engraçada de alguém conhecido por todos ou CACHAÇA",
  "19.Tentar dizer o alfabeto inteiro de trás para frente em 30 segundos ou CACHAÇA",
  "20.Fazer uma declaração de amor para um objeto inanimado ou CACHAÇA",
  "21.Fazer uma mímica de uma cena de filme ou série famosa e pedir para seus amigos adivinharem qual é ou CACHAÇA",
  "22.Ligar para um ex-namorado(a) ou ex-crush e fingir que quer voltar a sair com ele(a) ou CACHAÇA",
  "23.Ir até um grupo de pessoas desconhecidas e fazer uma pergunta constrangedora ou CACHAÇA",
  "24.Fazer uma ligação para um serviço de atendimento ao cliente e começar a falar em uma língua inventada ou CACHAÇA",
  "25.Fazer uma ligação para um número aleatório e fingir que você é um vendedor ambulante ou CACHAÇA",
  "26.Tirar uma selfie com uma expressão facial estranha e postar nos stories com a legenda mais engraçada que conseguir pensar ou CACHAÇA",
  "27.Fazer uma chamada de vídeo com um amigo e pedir para ele escolher uma música para você dançar. Dançar a música inteira, mesmo que não saiba a coreografia ou CACHAÇA",
  "28.Escreva um poema de amor para a pessoa à sua direita ou CACHAÇA",
  "29.Faça uma dança da vitória sempre que alguém completar um desafio ou CACHAÇA",
  "30.Recrie uma cena famosa de um filme usando objetos ao seu redor ou CACHAÇA",
  "31.Cante o refrão de sua música favorita em voz alta ou CACHAÇA",
  "32.Conte uma história engraçada que aconteceu com você no último ano ou CACHAÇA",
  "33.Imite o animal que o grupo escolher por um minuto ou CACHAÇA",
  "34.Faça uma selfie fazendo uma careta e poste no seu feed do Instagram ou CACHAÇA",
  "35.Escolha alguém do grupo e elogie essa pessoa por um minuto sem parar ou CACHAÇA",
  "36.Conte uma piada que faça todo mundo rir ou CACHAÇA",
  "37.Faça uma imitação de um personagem de desenho animado famoso ou CACHAÇA",
  "38.Escolha uma música e faça uma performance de lip-sync ou CACHAÇA",
  "39.Faça uma pose de ioga por um minuto ou CACHAÇA",
  "40.Escreva uma mensagem de texto para seus pais dizendo que você os ama ou CACHAÇA",
  "41.Faça uma ligação para uma pizzaria e peça algo que não esteja no menu ou CACHAÇA",
  "42.Escreva um tweet engraçado e poste no seu Twitter ou CACHAÇA",
  "43.Faça uma dança engraçada e poste no TikTok ou CACHAÇA",
  "44.Escolha alguém do grupo e faça uma pintura de rosto nessa pessoa ou CACHAÇA",
  "45.Faça uma ligação para um amigo e tente convencê-lo a cantar uma música ou CACHAÇA",
  "46.Escreva uma carta de amor para uma celebridade e poste no seu Facebook ou CACHAÇA",
  "47.Escolha uma música e tente tocar a melodia batendo palmas ou CACHAÇA",
  "48.Cante um rap de 30 segundos sobre o seu dia e apresente para o grupo ou CACHAÇA",
  "49.Escolha uma pessoa do grupo e tente adivinhar a cor da roupa íntima que ela está usando ou CACHAÇA",
  "50.Faça uma ligação para um amigo e tente convencê-lo a participar do jogo ou CACHAÇA",
];

// Array para armazenar as mensagens já utilizadas
let mensagensUtilizadas = [];

// Função para gerar uma mensagem aleatória
function gerarMensagem() {
  // Verificar se todas as mensagens foram utilizadas
  if (mensagensUtilizadas.length === mensagens.length) {
    document.getElementById("mensagem").textContent =
      "Todas os desafios foram usadas!";
    return;
  }

  // Escolha aleatória de uma mensagem não utilizada
  let mensagemAleatoria;
  do {
    mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  } while (mensagensUtilizadas.includes(mensagemAleatoria));

  // Atualizar o texto do elemento <div> com a mensagem escolhida
  document.getElementById("mensagem").textContent = mensagemAleatoria;

  // Adicionar a mensagem utilizada ao array de mensagens
  mensagensUtilizadas.push(mensagemAleatoria);
}
