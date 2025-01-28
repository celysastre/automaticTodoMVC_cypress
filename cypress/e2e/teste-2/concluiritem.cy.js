import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects.js";

describe("Concluir itens na lista de toDO", () => {
  /**
   *  before: antes do primeiro teste
   *  before each - antes de cada teste (rodar antes de cada teste)
   *
   */
  beforeEach(() => {
    cy.visit("/");
    var todoItens = ["Maçã", "Banana", "Cenoura"];

    todoItens.forEach(function (item, indice, array) {
      telaInicial.inputText(item);
    });
  });

  it("Concluir um item na lista de TOdo", () => {
    telaInicial.concluirItem();
  });
});
