/// <reference types="cypress" />

describe('Home page works', () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit('http://localhost:3000');
  });

  it('should display the company name and the name of the board on header', () => {
    cy.get('h6').first().should('have.text', 'Baxhen Academy');
    cy.get('h6').last().should('have.text', 'Feedback Board');
  });

  it('should display the menu drawer when menu icon is clicked', () => {
    cy.get('[data-testid=icon-button]').click();

    cy.get('[data-testid=drawer-paper]').should('exist');
  });

  it('should close the menu drawer when menu icon is clicked', () => {
    cy.get('[data-testid=icon-button]').click();

    cy.get('[data-testid=icon-button]').click();

    cy.get('[data-testid=drawer-paper]').should('not.exist');
  });

  it('should select a filter in the menu drawer when clicked', () => {
    cy.get('[data-testid=icon-button]').click();

    cy.get('[data-testid=toggle-button-ui]').click();

    cy.get('[data-testid=toggle-button-ui]').should(
      'have.css',
      'background-color',
      'rgb(70, 97, 230)'
    );

    cy.get('[data-testid=toggle-button-ux]').click();

    cy.get('[data-testid=toggle-button-ux]').should(
      'have.css',
      'background-color',
      'rgb(70, 97, 230)'
    );
  });
});
