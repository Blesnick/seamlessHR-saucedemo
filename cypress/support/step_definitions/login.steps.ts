// cypress/support/step_definitions/login.steps.ts
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I enter username {string} and password {string}', (user: string, pass: string) => {
    cy.get('#user-name').clear().type(user);
    cy.get('#password').clear().type(pass);
});

When('I click login', () => {
    cy.get('#login-button').click();
});


When('I am on the login page', () => {
    cy.visit('/');
    cy.get('#user-name').should('be.visible');
});

When('I login with invalid credentials {string} and {string}', (username: string, password: string) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

When('I login with locked out credentials {string} and {string}', (username: string, password: string) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

Then('I should see an error message {string}', (expectedMessage: string) => {
    cy.get('[data-test="error"]')
        .should('be.visible')
        .and('have.text', expectedMessage);
});