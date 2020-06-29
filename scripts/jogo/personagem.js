class Personagem extends Animacao{
  constructor(imagem, posicao, resolucao, spritesConfigs) {
    super(imagem, posicao, resolucao, spritesConfigs);

    this.yInicial = this.posicao.y;
    this.posicao.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.velocidadeMaximaDoPulo = -30;
    this.pulos = 0;
    this.gravidade = 3;

    this.invencivel = false;
  }

  pula(somDoPulo) {
    if (this.posicao.y === this.yInicial) {
      this.pulos = 0;
    }
    
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.velocidadeMaximaDoPulo;
      somDoPulo.play();
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.posicao.y += this.velocidadeDoPulo;

    this.velocidadeDoPulo += this.gravidade;

    if (this.posicao.y > this.yInicial) {
      this.posicao.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }
    
    const precisao = .7;

    return collideRectRect(
      this.posicao.x, this.posicao.y, 
      this.resolucao.width * precisao, this.resolucao.height * precisao,
      inimigo.posicao.x, inimigo.posicao.y,
      inimigo.resolucao.width * precisao, inimigo.resolucao.height * precisao,
    );
  }

  ficaInvencivel() {
    this.invencivel = true;

    setTimeout(() => {
      this.invencivel = false;
    }, 1000)
  }
}