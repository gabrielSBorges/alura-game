class Animacao {
  constructor(imagem, posicao, resolucao, spritesConfigs) {
    this.matriz = criaMatriz(spritesConfigs);
    this.imagem = imagem;
    this.posicao = posicao;
    this.resolucao = resolucao;
    this.spritesConfigs = spritesConfigs;
    this.frameAtual = 0;
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
      this.posicao.x, this.posicao.y, // Define a posição do sprite na tela
      this.resolucao.width, this.resolucao.height, // Define a resolução da imagem do sprite
      this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], // Define o sprite atual
      this.spritesConfigs.width, this.spritesConfigs.height // Define o tamanho real do sprite
    );

    this.atualizaSprite();
  }
}

function criaMatriz(configs) {
  let { width, height, linhas, colunas, lastLineColumns } = configs;
  
  let matriz = [];

  let y = 0;
  for (let l = 0; l < linhas; l++) {
    let x = 0;
    
    if (l == linhas - 1 && lastLineColumns) colunas = lastLineColumns;

    for (let c = 0; c < colunas; c++) {
      matriz.push([x, y]);
      x += width;
    }

    y += height;
  }

  return matriz;
}