/// <reference types="cypress" />
describe('Novidades', () => {

  it('Cadastrar email com sucesso', () => {
    cy.visit('/')
      .get('#top_header')

    cy.get('.form-control')
      .type('bruno.dorea94@gmail.com')

    cy.get('.clear .theme-btn-one.btn_md')
      .click()

    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Success')
  })

  it('Cadastrar email com sucesso apertando enter', () => {
    cy.visit('/')
      .get('#top_header')

    cy.get('.form-control')
      .type('bruno.dorea94@gmail.com{enter}')

    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Success')
  })

  it('Verificar fechamendo da mensagem de sucesso', () => {
    cy.visit('/')
      .get('#top_header')

    cy.get('.form-control')
      .type('bruno.dorea94@gmail.com{enter}')

    cy.get('.swal2-actions > .swal2-confirm')
      .click()

    cy.wait(1000)

    cy.get('#swal2-title')
      .should('not.exist')
  })
})