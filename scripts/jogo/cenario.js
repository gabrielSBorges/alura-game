class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.posX1 = 0;
    this.posX2 = width;
  }

  move() {
    this.posX1 = this.posX1 - this.velocidade;
    this.posX2 = this.posX2 - this.velocidade;

    if (this.posX1 == -width) {
      this.posX1 = width;
    }

    if (this.posX2 == -width) {
      this.posX2 = width;
    }
  }

  anima() {
    image(this.imagem, this.posX1, 0, width, height);
    image(this.imagem, this.posX2, 0, width, height);

    this.move();
  }  
}