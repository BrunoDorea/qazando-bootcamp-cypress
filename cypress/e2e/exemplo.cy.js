describe('Login', () => {

  it('Login com sucesso', () => {
    // acessar url -> 'http://www.automationpratice.com.br/'
    cy.visit('http://www.automationpratice.com.br/').get('#top_header')
    // criar as ações/steps
    // selecionar elemento
    // preencher o campo
    cy.get('.form-control').type('bruno.dorea94@gmail.com')
    // click no elemento
    cy.get('.clear .theme-btn-one.btn_md').click()
  })

})