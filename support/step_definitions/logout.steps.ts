// cypress/support/step_definitions/logout.steps.ts
import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I open menu and click logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
});