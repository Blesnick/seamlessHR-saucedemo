// cypress/support/step_definitions/checkout.steps.ts
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When(
    'I enter firstname {string} lastname {string} zip {string}',
    (fn: string, ln: string, zip: string) => {
        cy.get('#first-name').type(fn);
        cy.get('#last-name').type(ln);
        cy.get('#postal-code').type(zip);
    }
);

When('I click continue', () => {
    cy.get('#continue').click();
});

Then('overview total should contain {string}', (symbol: string) => {
    cy.get('.summary_total_label').should('contain', symbol);
});

When('I click finish', () => {
    cy.get('#finish').click();
});

Then('I should see thank you message {string}', (msg: string) => {
    cy.get('.complete-header').should('have.text', msg);
});