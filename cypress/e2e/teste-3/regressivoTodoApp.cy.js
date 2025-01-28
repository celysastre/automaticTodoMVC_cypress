import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects.js";

describe("Regressivo toDO App", () => {
  context("Validar a tela inicial", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Validar a area label de input de dados", () => {
      telaInicial.ValidarInput("What needs to be done?");
    });
  });
  context("Validar a adição de itens", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Adicionar mais de um item na Lista", () => {
      var todoItens = ["Maçã", "Banana", "Cenoura"];

      todoItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });

      /**
       * Validar que o contador é igual 3
       */
      telaInicial.validadorContador(3);
    });
  });
  context("Validar a conclusão de itens", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItens = ["Maçã", "Banana", "Cenoura"];
      todoItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });
    });

    it("Concluir um item na lista de toDO", () => {
      telaInicial.concluirItem();
      telaInicial.validadorContador(2);
    });
  });
  context("Validar o filtro da aplicação", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItens = ["Maçã", "Banana", "Cenoura"];

      todoItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });

      telaInicial.concluirItem();
    });

    it("Validar a lista de itens ativos", () => {
      telaInicial.filtrarItem("Active");
      telaInicial.validarSizetoDO(2);
    });
    it("Validar a lista de itens concluídos", () => {
      telaInicial.filtrarItem("Completed");
      telaInicial.validarSizetoDO(1);
    });
  });

  context("Validar a remoção de itens", () => {
    beforeEach(() => {
      cy.visit("/");
      var todoItens = ["Maçã", "Banana", "Cenoura"];

      todoItens.forEach(function (item, indice, array) {
        telaInicial.inputText(item);
      });
    });

    it("Deleçção de um item da lista", () => {
      telaInicial.deletarItem();
      telaInicial.validarSizetoDO(2);
    });
  });
});
