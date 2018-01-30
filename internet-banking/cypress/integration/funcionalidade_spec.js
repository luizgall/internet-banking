describe("teste de funcionalidades", function(){
    it("entrar na página login", function(){
        cy.visit("localhost:4200")
        cy.get('#num-conta').type('1006').should('have.value', '1006')
        cy.get('#senha').type('123456').should('have.value', '123456')
        cy.get('#logar').click()
    })
    it("Iniciando uma Transferencia", function(){
        cy.get('#transfer').click()
        cy.get('#valorTranfer').type('300,00').should('have.value', '300,00')
        cy.get('#contaDestino').type('1005').should('have.value', '1005')
        cy.get('#confirmaTransfer').click()
    })
    
    it("Confirmando a Transferencia no Extrato", function(){
        cy.get('#viewExtrato').click()
    }) 

    it(" ", function(){
        //cy.get('#transfer').click()
    }) 
        
        

    

})