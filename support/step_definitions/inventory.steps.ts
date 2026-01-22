// cypress/support/step_definitions/inventory.steps.ts
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I add item {string} to cart', (itemName: string) => {
    cy.contains('.inventory_item_name', itemName)
        .parents('.inventory_item')
        .find('button[id^="add-to-cart"]')
        .click();
});

Then('cart badge should show {string}', (count: string) => {
    cy.get('.shopping_cart_badge').should('have.text', count);
});