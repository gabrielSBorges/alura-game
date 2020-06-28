// Imagens
let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;

// Sons
let musicaDeFundo;
let somDoPulo;

// Objetos
let cenarioLayer1;
let cenarioLayer2;
let cenarioLayer3;
let cenarioLayer4;
let cenarioLayer5;
let cenarioLayer6;

let personagem;
let inimigos = [];
let pontuacao;

// Carrega os arquivos do jogo (imagens, músicas etc)
function preload() {
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

// Define configurações do jogo (roda uma vez ao iniciar o jogo)
function setup() {
  createCanvas(windowWidth, windowHeight);

  cenarioLayer1 = new Cenario(imagemCenario1, 0.3);
  cenarioLayer2 = new Cenario(imagemCenario2, 1);
  cenarioLayer3 = new Cenario(imagemCenario3, 2);
  cenarioLayer4 = new Cenario(imagemCenario4, 4);
  cenarioLayer5 = new Cenario(imagemCenario5, 6);
  cenarioLayer6 = new Cenario(imagemCenario6, 8);

  // Personagem
  personagem = new Personagem(
    imagemPersonagem, // Sprites
    { x: 100, y: height - (135 + 20) }, // Posicao 
    { width: 110, height: 135 }, // Resolucao do sprite
    { width: 220, height: 270, linhas: 4, colunas: 4 } // Configurações dos sprites
  );

  // Inimigo 1
  const gotinha = new Inimigo(
    imagemGotinha, // Sprites
    { x: width - 100, y: height - (52 + 15) },  // Posicao
    { width: 52, height: 52 }, // Resolução do sprite
    { width: 104, height: 104, linhas: 7, colunas: 4 }, // Configurações dos sprites
    10, // Velocidade
    100, // Delay
  );

  // Inimigo 2
  const troll = new Inimigo(
    imagemTroll, // Sprites
    { x: width - 200, y: height - (200 - 6) }, // Posicao
    { width: 200, height: 200 }, // Resolução do sprite
    { width: 400, height: 400, linhas: 6, colunas: 5, lastLineColumns: 3 }, // Configurações dos sprites
    10, // Velocidade
    500, // Delay
  );

  // Inimigo 3
  const gotinhaVoadora = new Inimigo(
    imagemGotinhaVoadora, // Sprites
    { x: width - 100, y: height - 150 },  // Posicao
    { width: 100, height: 75 }, // Resolução do sprite
    { width: 200, height: 150, linhas: 6, colunas: 3, lastLineColumns: 1 }, // Configurações dos sprites
    10, // Velocidade
    100, // Delay
  );

  inimigos.push(
    gotinha,
    gotinhaVoadora,
    troll,
  );

  pontuacao = new Pontuacao();

  musicaDeFundo.loop(); // Toca a música do jogo em loop

  frameRate(30); // Frames por segundo (afeta a velocidade da atualização do sprite da Hipsta)
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula(somDoPulo);
  }
}

// Atualiza o estado do jogo (roda "infinitamente" após o jogo iniciar)
function draw() {
  cenarioLayer1.anima();
  cenarioLayer2.anima();
  cenarioLayer3.anima();
  cenarioLayer4.anima();
  cenarioLayer5.anima();

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.anima();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.anima();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 2);
      noLoop();
    }
  });

  cenarioLayer6.anima();
}