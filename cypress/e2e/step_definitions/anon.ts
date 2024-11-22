import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { first } from "cypress/types/lodash";

Given('I am on the home page', () => {
    cy.visit('');
  });

When('I click on the renting button', () => {
    cy.get('[data-cy="money"]').first().click()
});

Then('I should see a warning dialog', () => {
    cy.contains('div', 'You must log in to hire this hero.').should('be.visible');
})
