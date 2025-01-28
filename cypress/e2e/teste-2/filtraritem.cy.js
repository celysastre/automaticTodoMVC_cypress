import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects.js";

describe("Validar os filtros da aplicação, após a edição de itens", () => {
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

    telaInicial.concluirItem();

  });

/** 
 * Clicar no filtro
 * o item ser exibido
 * e o contador deve bater com a informação
 * 
*/

  it("Filtrr itens ativos", () => {
    telaInicial.filtrarItem("Active")
  });

  it.skip("Filtrr itens concluídos", () => {
   
  });
});
