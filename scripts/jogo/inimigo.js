class Inimigo extends Animacao {
  constructor(imagem, posicao, resolucao, spritesConfigs, velocidade) {
    super(imagem, posicao, resolucao, spritesConfigs);

    this.velocidade = velocidade;
    this.posicao.x = width;
  }

  move() {
    this.posicao.x -= this.velocidade;
  }

  aparece() {
    this.posicao.x = width;
  }
}