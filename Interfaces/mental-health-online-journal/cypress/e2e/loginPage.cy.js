describe('loginPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  // it('passes-user-tries-to-login', () => {
  //   cy.get('.login__email__txtBox').type('testing@email.com')
  //   cy.get('.login__password__txtBox').type('testing')
  //   cy.contains('Login').click()
  // })

  it.only('passes-user-tries-to-not-login', () => {
    cy.get('.login__email__txtBox').type('testing@email.com')
    cy.get('.login__password__txtBox').type('testing123') //wrong password - to test
    cy.contains('Login').click()
  })
})