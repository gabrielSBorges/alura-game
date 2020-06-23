class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    
    this.frameAtual = 0;
    
    this.resolucao = {
      x: 110,
      y: 135 
    }

    this.posicaoInical = {
      x: 100,
      y: height - (this.resolucao.y + 10)
    }

    this.sprites = {
      width: 220,
      height: 270,
      totalLinhas: 4,
      totalColunas: 4
    }

    this.matriz = criaMatriz(this.sprites.width, this.sprites.height, this.sprites.totalLinhas, this.sprites.totalColunas);
  }

  atualizaSprite() {
    this.frameAtual++;

    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }

  anima() {
    image(
      this.imagem, // Define a imagem/mapa de sprites
      this.posicaoInical.x, this.posicaoInical.y, // Define a posição do sprite na tela
      this.resolucao.x, this.resolucao.y, // Define a resolução da imagem do sprite
      this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], // Define o sprite atual
      this.sprites.width, this.sprites.height // Define o tamanho real do sprite
    );

    this.atualizaSprite();
  }
}

function criaMatriz(width, height, linhas, colunas) {
  let matriz = [];

  let y = 0;
  for (let l = 0; l < linhas; l++) {
    let x = 0;
    
    for (let c = 0; c < colunas; c++) {
      matriz.push([x, y]);
      x += width;
    }

    y += height;
  }

  return matriz;
}