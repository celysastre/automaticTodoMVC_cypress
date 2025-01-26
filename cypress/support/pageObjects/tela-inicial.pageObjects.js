/**
 *  
 * 
 */


const elem = require('../elements/tela-incial.elements').ELEMENTS



class telaInicial {
    

    inputText(dado){
    
    cy.get(elem.inputTodo).type(dado).type('{enter}')
    
} 

}

export default new telaInicial();