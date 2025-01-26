
import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects.js"

describe('Acessar a página do todo mvc', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')

    telaInicial.inputText();

  })
})