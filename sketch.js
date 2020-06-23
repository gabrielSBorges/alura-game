let imagemCenarioSrc;
let imagemPersonagemSrc;
let musicaDeFundo;

let cenario;
let personagem;

let velocidadeAnimacaoCenario = 3;

// Carrega os arquivos do jogo (imagens, músicas etc)
function preload() {
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  musicaDeFundo = loadSound('assets/sons/trilha_jogo.mp3');
}

// Define configurações do jogo (roda uma vez ao iniciar o jogo)
function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, velocidadeAnimacaoCenario);

  personagem = new Personagem(imagemPersonagem);

  musicaDeFundo.loop(); // Toca a música do jogo em loop

  frameRate(30); // Frames por segundo (afeta a velocidade da atualização do sprite da Hipsta)
}

// Atualiza o estado do jogo (roda "infinitamente" após o jogo iniciar)
function draw() {
  cenario.anima(); 

  personagem.anima();
}