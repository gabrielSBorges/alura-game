class Inimigo extends Animacao {
  constructor(imagem, posicao, resolucao, spritesConfigs, velocidade, delay) {
    super(imagem, posicao, resolucao, spritesConfigs);

    this.velocidade = velocidade;
    this.delay = delay;
    this.posicao.x = width + this.delay;
  }

  move() {
    this.posicao.x = this.posicao.x - this.velocidade;

    if (this.posicao.x < -this.resolucao.width - this.delay) {
      this.posicao.x = width;
    }
  }
}