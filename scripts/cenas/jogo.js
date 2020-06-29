class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  
  setup() {
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
    );

    // Inimigo 2
    const gotinhaVoadora = new Inimigo(
      imagemGotinhaVoadora, // Sprites
      { x: width - 100, y: height - 250 },  // Posicao
      { width: 100, height: 75 }, // Resolução do sprite
      { width: 200, height: 150, linhas: 6, colunas: 3, lastLineColumns: 1 }, // Configurações dos sprites
      10, // Velocidade
    );

    // Inimigo 3
    const troll = new Inimigo(
      imagemTroll, // Sprites
      { x: width - 200, y: height - (200 - 6) }, // Posicao
      { width: 200, height: 200 }, // Resolução do sprite
      { width: 400, height: 400, linhas: 6, colunas: 5, lastLineColumns: 3 }, // Configurações dos sprites
      10, // Velocidade
    );

    inimigos.push(
      gotinha,
      gotinhaVoadora,
      troll,
    );

    pontuacao = new Pontuacao();

    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula(somDoPulo);
    }
  }

  draw() {
    cenarioLayer1.anima();
    cenarioLayer2.anima();
    cenarioLayer3.anima();
    cenarioLayer4.anima();
    cenarioLayer5.anima();

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.anima();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice]

    let inimigo = inimigos[linhaAtual.inimigo];
    inimigo.anima();
    inimigo.move();

    if (inimigo.posicao.x < -inimigo.resolucao.width) {
      this.indice++; 

      inimigo.aparece();

      if (this.indice >= this.mapa.length) {
        this.indice = 0;
      }

      inimigo.velocidade = linhaAtual.velocidade;
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel();
      
      if (vida.vidas == 0) {
        image(imagemGameOver, width / 2 - 200, height / 2);
        noLoop();
      }
    }

    cenarioLayer6.anima();
  }
}