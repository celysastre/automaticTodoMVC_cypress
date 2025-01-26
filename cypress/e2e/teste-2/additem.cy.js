import { it } from "mocha";
import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects.js"


describe('Adicionar itens na mionha lista de toDO', () => {
    /**
     *  before: antes do primeiro teste
     *  before each - antes de cada teste (rodar antes de cada teste)
     * 
     */
    beforeEach(()=>{
        cy.visit('/')
        

      
    })
  

    it('Adicionar mais de um item na Lista', () =>{

        var todoItens = ["Maçã", "Banana", "Cenoura"]

       todoItens.forEach(function(item, indice,array){

            telaInicial.inputText(item)
       })

    });


});