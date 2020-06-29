class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.width = 25;
    this.height = 20;
    this.x = 20;
    this.y = 20
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i * 10;
      const posicao = this.x * (i + 1)

      image(imagemCoracao, posicao + margem, this.y, this.width, this.height)
    }
  }

  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++;
    }
  }

  perdeVida() {
    if (this.vidas > 0) {
      this.vidas--;
    }
  }
}