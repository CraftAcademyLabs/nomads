
describe('User can view', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('a welcome message', () => {
    cy.get('div #main').should('have.text', 'Craft Academy NOMADS')
  });

  it('promo content headers', () => {
    cy.get('#main #promo')
      .within(() => {
        cy.get('.promo-content')
          .should('have.length', 2)
          .first().should('have.text', "Time for a new form of education")
          .next().should('have.text', "Introducing CA Nomads")

      })
  });
});