describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Forgot Password').click();
  })
})