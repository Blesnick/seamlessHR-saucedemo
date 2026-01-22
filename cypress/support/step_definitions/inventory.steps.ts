// cypress/support/step_definitions/inventory.steps.ts
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am logged in as {string}', (username: string) => {
    cy.visit('/');
    cy.get('#user-name').type(username);
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.title').should('have.text', 'Products');
});
// cypress/support/step_definitions/login.steps.ts (add this)
Given('I am logged in as {string} with items in cart', (username: string) => {
    cy.visit('/');
    cy.get('#user-name').type(username);
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.title').should('have.text', 'Products');

    // Add two items (as used in your checkout scenario)
    cy.contains('Sauce Labs Backpack').parents('.inventory_item').find('button:contains("Add to cart")').click();
    cy.contains('Sauce Labs Bike Light').parents('.inventory_item').find('button:contains("Add to cart")').click();

    cy.get('.shopping_cart_badge').should('have.text', '2');
});
When('I add the item {string} to the cart', (itemName: string) => {
    cy.contains('.inventory_item_name', itemName)
        .parents('.inventory_item')
        .find('button:contains("Add to cart")')
        .click();
});

When('I navigate to the cart', () => {
    cy.get('.shopping_cart_link').click();
});

Then('the cart should contain {string}', (itemName: string) => {
    cy.get('.cart_list .cart_item')
        .contains(itemName)
        .should('exist');
});

Then('the cart item count should be {int}', (expectedCount: number) => {
    cy.get('.shopping_cart_badge')
        .should('have.text', expectedCount.toString());
});