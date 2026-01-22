// cypress/support/step_definitions/checkout.steps.ts
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I proceed to checkout', () => {
    cy.get('#checkout').click();
});

When('I fill in checkout information {string} {string} {string}', (firstName: string, lastName: string, postalCode: string) => {
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(postalCode);
    cy.get('#continue').click();
});

When('I continue to overview', () => {
    // This step is usually covered by the previous one (click continue)
    // but kept for explicitness in the scenario
    cy.url().should('include', '/checkout-step-two.html');
});

Then('the overview should show total with tax', () => {
    cy.get('.summary_subtotal_label').should('be.visible');
    cy.get('.summary_tax_label').should('be.visible');
    cy.get('.summary_total_label').should('be.visible');
    cy.get('.summary_total_label').should('contain.text', '$');
});

When('I finish checkout', () => {
    cy.get('#finish').click();
});

Then('I should see the order confirmation {string}', (confirmationText: string) => {
    cy.get('.complete-header')
        .should('be.visible')
        .and('have.text', confirmationText);
});