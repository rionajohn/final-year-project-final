describe('HomeTestPage', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/home")
  })

  it('passes-go-to-journal-home-help page', () => {
    cy.contains('Help').click()
  })
})
