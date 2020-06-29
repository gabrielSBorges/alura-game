// Define configurações do jogo (roda uma vez ao iniciar o jogo)
function setup() {
  createCanvas(windowWidth, windowHeight);

  musicaDeFundo.loop(); // Toca a música do jogo em loop

  frameRate(30); // Frames por segundo (afeta a velocidade da atualização do sprite da Hipsta)
  
  telaInicial = new TelaIncial();
  telaInicial.setup();

  jogo = new Jogo();
  jogo.setup();

  cenas = {
    telaInicial,
    jogo, 
  }

  if (cenaAtual === 'telaInicial') {
    botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
  }
}

function keyPressed() {
  jogo.keyPressed(key);
}

// Atualiza o estado do jogo (roda "infinitamente" após o jogo iniciar)
function draw() {
  cenas[cenaAtual].draw();
}