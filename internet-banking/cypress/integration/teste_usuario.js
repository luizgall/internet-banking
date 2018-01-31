describe("teste de funcionalidades", function(){
  it("entrar na página login DESKTOP", function(){
    cy.viewport("macbook-15")
    cy.visit("localhost:4200")
    cy.get('input[placeholder="Número da conta"').type('1001').should('have.value', '1001')
    cy.get('input[placeholder="Senha eletrônica"').type('123456').should('have.value', '123456')
    cy.get('button[type="submit"]').click()
  })
  it("Iniciando uma Transferencia DESKTOP", function() {
    cy.viewport("macbook-15")
    cy.get('#transferBtnDesktop').click()
    cy.get('input[placeholder="Valor a transferir"]').type('30,00').should('have.value', '30,00')
    cy.get('input[placeholder="Conta destino"]').type('1005').should('have.value', '1005')
    cy.get('input[placeholder="Senha"]').type('123456').should('have.value', '123456')
    cy.get('button[mat-raised-button]').click()
  })  
  it("Conferindo extratos DESKTOP", function() {
    cy.viewport("macbook-15")
    cy.get('.mat-simple-snackbar-action').click()
    cy.get('#extratoBtnDesktop').click()
  })
  it("Deslogando da página DESKTOP", function() {
    cy.viewport("macbook-15")
    cy.get('#tresPontosBtn').click()
    cy.get('#logOutDesktop').click()
  })

  // TABLETS
  it("entrar na página login TABLET", function(){
    cy.viewport("ipad-mini")
    cy.visit("localhost:4200")
    cy.get('input[placeholder="Número da conta"').type('1005').should('have.value', '1005')
    cy.get('input[placeholder="Senha eletrônica"').type('123456').should('have.value', '123456')
    cy.get('button[type="submit"]').click()
  })
  it("Iniciando uma Transferencia TABLET", function() {
    cy.viewport("ipad-mini")
    cy.get('#menuBurgerBtn').click()
    cy.get('#transferBtnMobile').click()
    cy.get('input[placeholder="Valor a transferir"]').type('30,00').should('have.value', '30,00')
    cy.get('input[placeholder="Conta destino"]').type('1001').should('have.value', '1001')
    cy.get('input[placeholder="Senha"]').type('123456').should('have.value', '123456')
    cy.get('button[mat-raised-button]').click()
  })  
  it("Conferindo extratos TABLET", function() {
    cy.viewport("ipad-mini")
    cy.get('.mat-simple-snackbar-action').click()
    cy.get('#menuBurgerBtn').click()
    cy.get('#extratoBtnMobile').click()
  })
  it("Deslogando da página TABLET", function() {
    cy.viewport("ipad-mini")
    cy.get('#menuBurgerBtn').click()
    cy.get('#logOutMobile').click()
  })

  // SMARTPHONES
  it("entrar na página login SMARTPHONE", function(){
    cy.viewport("iphone-6+")
    cy.visit("localhost:4200")
    cy.get('input[placeholder="Número da conta"').type('1001').should('have.value', '1001')
    cy.get('input[placeholder="Senha eletrônica"').type('123456').should('have.value', '123456')
    cy.get('button[type="submit"]').click()
  })
  it("Iniciando uma Transferencia SMARTPHONE", function() {
    cy.viewport("iphone-6+")
    cy.get('#menuBurgerBtn').click()
    cy.get('#transferBtnMobile').click()
    cy.get('input[placeholder="Valor a transferir"]').type('30,00').should('have.value', '30,00')
    cy.get('input[placeholder="Conta destino"]').type('1005').should('have.value', '1005')
    cy.get('input[placeholder="Senha"]').type('123456').should('have.value', '123456')
    cy.get('button[mat-raised-button]').click()
  })  
  it("Conferindo extratos SMARTPHONE", function() {
    cy.viewport("iphone-6+")
    cy.get('.mat-simple-snackbar-action').click()
    cy.get('#menuBurgerBtn').click()
    cy.get('#extratoBtnMobile').click()
  })
  it("Deslogando da página SMARTPHONE", function() {
    cy.viewport("iphone-6+")
    cy.get('#menuBurgerBtn').click()
    cy.get('#logOutMobile').click()
  })

  // // TESTANDO VALIDAÇÕES
  // it("Tentando logar com dados inválidos", function(){
  //   cy.viewport("macbook-15")
  //   cy.visit("localhost:4200")
    
  //   // input com conta string
  //   cy.get('input[placeholder="Número da conta"').type('gama')
  //   cy.get('input[placeholder="Número da conta"').clear()
  //   // input com conta 3 digitos
  //   cy.get('input[placeholder="Número da conta"').type('100')
  //   cy.get('input[placeholder="Número da conta"').clear()
  //   // input com conta OK
  //   cy.get('input[placeholder="Número da conta"').type('1001').should('have.value', '1001')

  //   // input com senha string
  //   cy.get('input[placeholder="Senha eletrônica"').type('murilo').should('have.value', 'murilo')
  //   cy.get('button[type="submit"]').click()
  //   cy.get('.mat-simple-snackbar-action').click()
  //   cy.get('input[placeholder="Senha eletrônica"').clear()
  //   // input com senha 5 digitos
  //   cy.get('input[placeholder="Senha eletrônica"').type('12345').should('have.value', '12345')
  //   cy.get('button[type="submit"]').click()
  //   cy.get('.mat-simple-snackbar-action').click()
  //   cy.get('input[placeholder="Senha eletrônica"').clear()
  //   // input com senha ok
  //   cy.get('input[placeholder="Senha eletrônica"').type('123456').should('have.value', '123456')

  //   // entrar com sucesso
  //   cy.get('button[type="submit"]').click()
  // })
  // it("Tentando fazer transferência com dados inválidos", function() {
  //   cy.viewport("macbook-15")
  //   cy.get('#transferBtnDesktop').click()

  //   // input valor com string
  //   cy.get('input[placeholder="Valor a transferir"]').type('avanade').should('have.value', 'avanade')
  //   cy.get('input[placeholder="Valor a transferir"]').clear()
  //   // input valor com numero ok
  //   cy.get('input[placeholder="Valor a transferir"]').type('30,00').should('have.value', '30,00')
  //   // input com conta OK
  //   cy.get('input[placeholder="Conta destino"').type('1001').should('have.value', '1001')
  //   // input senha com 5 numeros
  //   cy.get('input[placeholder="Senha"]').type('12345').should('have.value', '12345')
  //   cy.get('button[mat-raised-button]').click()
  //   cy.get('.mat-simple-snackbar-action').click()
  //   cy.get('input[placeholder="Senha"]').clear()
  //   // input senha ok
  //   cy.get('input[placeholder="Senha"]').type('123456').should('have.value', '123456')
  //   cy.get('button[mat-raised-button]').click()
  //   cy.get('.mat-simple-snackbar-action').click()
  // })  
  // it("Conferindo extratos DESKTOP", function() {
  //   cy.viewport("macbook-15")
  //   cy.get('#extratoBtnDesktop').click()
  // })
  // it("Deslogando da página DESKTOP", function() {
  //   cy.viewport("macbook-15")
  //   cy.get('#tresPontosBtn').click()
  //   cy.get('#logOutDesktop').click()
  // })
})