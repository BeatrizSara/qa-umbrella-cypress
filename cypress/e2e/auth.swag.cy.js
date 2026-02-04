// Teste de login e logout no site saucedemo.com usando Cypress

describe('Login', () => {
  it('Usuario loga e desloga com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')

     // Tela de login
    cy.get('.login_logo').should('exist')

    //Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Confirma login
    cy.get('.title').should('exist')

    //Logout
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()

    //Confirma logout
    cy.get('.login_logo').should('exist')
  })
})