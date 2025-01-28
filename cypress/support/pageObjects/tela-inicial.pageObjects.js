/**
 * Formatar código, shift + alt + f
 *
 */

const elem = require("../elements/tela-incial.elements").ELEMENTS;
const concluirItem = require("../elements/tela-incial.elements").ITENS;
const filtroItem = require("../elements/tela-incial.elements").FILTROS;

class telaInicial {
  inputText(dado) {
    // console.log('Valor recebido:', dado);
    cy.get(elem.inputTodo).type(dado).type("{enter}");
    // cy.get(elem.inputTodo).debug().type(dado).type('{enter}');
  }
  concluirItem() {
    cy.get(concluirItem.ButtonConcluir)
    .first()
    .click();
  }

  filtrarItem(menu){
    cy.get(filtroItem.filtroTodo)
    .contains(menu)
    .and('be.visible')
    .click()
  }

  deletarItem(){
    cy.get(concluirItem.listaItens)
    .first()
    .find('button')
    .invoke('show')
    .click()
  }

  ValidarInput(texto) {
    cy.get(elem.inputTodo)
    .should('have.attr', 'placeholder')
    .and('include', texto)


  }  validadorContador(numero) {
      cy.get(filtroItem.contador)
      .contains(numero)
      
}
    validarSizetoDO (numero) {

      cy.get(concluirItem.validarListaItens)
      .should('have.length', numero)
     
    }
}

export default new telaInicial();
