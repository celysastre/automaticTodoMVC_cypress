import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects.js";

describe("Adicionar itens na mionha lista de toDO", () => {
  /**
   *  before: antes do primeiro teste
   *  before each - antes de cada teste (rodar antes de cada teste)
   *
   */
  beforeEach(() => {
    cy.visit("/");
  });

  it.skip("Adicionar um item na Lista", () => {
    const dado = "dado1"; // Valor definido
    telaInicial.inputText("dado250");
    telaInicial.inputText("dado589");
  });

  it("Adicionar mais de um item na Lista", () => {
    var todoItens = ["Maçã", "Banana", "Cenoura"];

    todoItens.forEach(function (item, indice, array) {
      telaInicial.inputText(item);
    });
  });
});
