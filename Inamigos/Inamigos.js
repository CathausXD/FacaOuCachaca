document.addEventListener("DOMContentLoaded", function () {
  // Verifica se já foi escolhido um modo anteriormente
  var modoSelecionado = localStorage.getItem("modoSelecionado");
  if (modoSelecionado) {
    // Se sim, carrega o script do modo selecionado
    carregarScript(modoSelecionado === "facil" ? "In51.js" : "In101.js");
    // Oculta os botões de modo
    ocultarBotoesModo();
  }
});

function escolherModo(modo) {
  if (modo === "facil") {
    carregarScript("In51.js");
    localStorage.setItem("modoSelecionado", "facil");
  } else if (modo === "dificil") {
    carregarScript("In101.js");
    localStorage.setItem("modoSelecionado", "dificil");
  }
  ocultarBotoesModo();
}

function carregarScript(nomeArquivo) {
  var script = document.createElement("script");
  script.src = nomeArquivo;
  document.head.appendChild(script);
}

function ocultarBotoesModo() {
  var Bt51 = document.getElementById("Bt51");
  var Bt101 = document.getElementById("Bt101");
  var BtGC = document.getElementById("BtGC");
  Bt51.style.display = "none";
  Bt101.style.display = "none";
  BtGC.style.display = "block";

  localStorage.setItem("botoesModoOcultos", "true");
}


  function resetLocalStorage() {
    localStorage.clear(); // Limpa todas as informações armazenadas
    location.reload(); // Recarrega a página para refletir as alterações
  }

  document.getElementById("btReset").addEventListener("click", resetLocalStorage);