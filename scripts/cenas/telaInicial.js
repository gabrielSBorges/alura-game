class TelaIncial {
  constructor() {

  }

  setup() {

  }

  draw() {
    this._imagemFundo();
    this._texto();
    this._botao();
  }

  _imagemFundo() {
    image(imagemTelaIncial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(40);
    text("As aventuras de", width / 2, height / 3);
    textSize(100);
    text("Hipsta", width / 2, height / 5 * 3);
  }

  _botao() {
    botaoGerenciador.y = height / 7 * 5
    botaoGerenciador.draw();
  }
}