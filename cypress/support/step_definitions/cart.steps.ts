// cypress/support/step_definitions/cart.steps.ts
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I click the cart icon', () => {
    cy.get('.shopping_cart_link').click();
});

Then('cart should contain {string}', (itemName: string) => {
    cy.get('.cart_item').contains(itemName).should('exist');
});

When('I click checkout button', () => {
    cy.get('#checkout').click();
});