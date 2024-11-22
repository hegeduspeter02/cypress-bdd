import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { first } from "cypress/types/lodash";

Given('I am on the home page', () => {
    cy.visit('');
});

When('I click on the {string} hero button', (buttonType: string) => {
    switch (buttonType) {
        case 'hire':
            cy.get('[data-cy="money"]').first().click()
            break;
        case 'like':
            cy.get('[data-cy="like"]').first().click()
            break;
        default:
            throw new Error('Not a valid button type');
    }
});

Then('I can see the anon warning with text: {string}', (errorText: string) => {
    cy.contains('div', errorText).should('be.visible');
});

