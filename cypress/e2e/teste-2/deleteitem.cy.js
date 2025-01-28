import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects.js";

describe("Deletar Itens", () => {
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

  /**
   * Clicar no filtro
   * o item ser exibido
   * e o contador deve bater com a informação
   *
   */

  it("Deleçção de um item da lista", () => {
    telaInicial.deletarItem();
  });
});
