// Carrega os arquivos do jogo (imagens, músicas etc)
function preload() {
  fita = loadJSON('fitas/fita1.json');
  
  imagemTelaIncial = loadImage('assets/imagens/cenas/telaInicial/telaInicial.png');
  fonteTelaInicial = loadFont('assets/imagens/cenas/telaInicial/fonteTelaInicial.otf');

  imagemCoracao = loadImage('assets/imagens/misc/coracao.png');
  
  imagemCenario1 = loadImage('assets/imagens/cenario/Hills Layer 01.png');
  imagemCenario2 = loadImage('assets/imagens/cenario/Hills Layer 02.png');
  imagemCenario3 = loadImage('assets/imagens/cenario/Hills Layer 03.png');
  imagemCenario4 = loadImage('assets/imagens/cenario/Hills Layer 04.png');
  imagemCenario5 = loadImage('assets/imagens/cenario/Hills Layer 05.png');
  imagemCenario6 = loadImage('assets/imagens/cenario/Hills Layer 06.png');

  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  imagemGotinha = loadImage('assets/imagens/inimigos/gotinha.png');
  imagemTroll = loadImage('assets/imagens/inimigos/troll.png');
  imagemGotinhaVoadora = loadImage('assets/imagens/inimigos/gotinha-voadora.png');

  imagemGameOver = loadImage('assets/imagens/misc/game-over.png');
  
  musicaDeFundo = loadSound('assets/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('assets/sons/somPulo.mp3');
}