// cypress/support/step_definitions/common.steps.ts
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
    cy.visit('/');
    cy.get('#user-name').should('be.visible');
});

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