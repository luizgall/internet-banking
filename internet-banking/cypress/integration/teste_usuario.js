describe("teste de funcionalidades", function(){
  it("entrar na página login DESKTOP", function(){
    cy.visit("localhost:4200")
    cy.get('input[placeholder="Número da conta"').type('1006').should('have.value', '1006')
    cy.get('input[placeholder="Senha eletrônica"').type('123456').should('have.value', '123456')
    cy.get('button[type="submit"]').click()
  })
  it("Iniciando uma Transferencia", function() {
    cy.get('a[routerLink="transferencia"]').click()
    cy.get('input[placeholder="Valor a transferir"]').type('30,00').should('have.value', '30,00')
    cy.get('input[placeholder="Conta destino"]').type('1005').should('have.value', '1005')
    cy.get('input[placeholder="Senha"]').type('123456').should('have.value', '123456')
    cy.get('button[mat-raised-button]').click()
  })  
  it("Conferindo extratos", function() {
    cy.get('a[routerLink="/extrato"]').click()
  })
  it("Deslogando da página", function() {
    cy.get('#tresPontosBtn').click()
    cy.get('#logOutBtn').click()
  })
})