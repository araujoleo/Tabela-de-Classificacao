//-- calculando pontos --
var jogador1 = {
    nome: "Jogador1",
    vitorias: 1,
    empates: 2,
    derrotas: 1,
    pontos: 0
  }; //objeto
  var jogador2 = {
    nome: "Jogador2",
    vitorias: 1,
    empates: 2,
    derrotas: 1,
    pontos: 0
  };
  var jogador3 = {
    nome: "Jogador3",
    vitorias: 1,
    empates: 2,
    derrotas: 1,
    pontos: 0
  };
  
  function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates; //vitoria = 3, empates = 1
    return pontos;
  }
  
  jogador1.pontos = calculaPontos(jogador1);
  jogador2.pontos = calculaPontos(jogador2);
  jogador3.pontos = calculaPontos(jogador3);
  
  //-- exibindo na tela --
  var jogadores = [jogador1, jogador2, jogador3];
  
  function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var indice = 0; indice < jogadores.length; indice++) {
      elemento += "<tr><td>" + jogadores[indice].nome + "</td>";
      elemento += "<td>" + jogadores[indice].vitorias + "</td>";
      elemento += "<td>" + jogadores[indice].empates + "</td>";
      elemento += "<td>" + jogadores[indice].derrotas + "</td>";
      elemento += "<td>" + jogadores[indice].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" +
        indice +
        ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" +
        indice +
        ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" +
        indice +
        ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
  
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  
  exibeJogadoresNaTela(jogadores);
  
  //-- botões --
  function adicionarVitoria(indice) {
    var jogador = jogadores[indice];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarEmpate(indice) {
    var jogador = jogadores[indice];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarDerrota(indice) {
    var jogador = jogadores[indice];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
  }
  