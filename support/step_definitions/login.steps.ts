// cypress/support/step_definitions/login.steps.ts
import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I enter username {string} and password {string}', (user: string, pass: string) => {
    cy.get('#user-name').clear().type(user);
    cy.get('#password').clear().type(pass);
});

When('I click login', () => {
    cy.get('#login-button').click();
});