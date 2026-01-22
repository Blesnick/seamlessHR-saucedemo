// cypress/support/step_definitions/common.steps.ts
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';



Then('I should see the products title {string}', (title: string) => {
    cy.get('.title').should('have.text', title);
});

Then('I should see error message containing {string}', (text: string) => {
    cy.get('[data-test="error"]').should('contain', text);
});

Then('I should be back on login page', () => {
    cy.get('#login-button').should('be.visible');
    cy.url().should('include', '/');
});
Then('I should be redirected to the inventory page', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
});
Then('I should be redirected to the login page', () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.get('#login-button').should('be.visible');
});