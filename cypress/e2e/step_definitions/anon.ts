import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { first } from "cypress/types/lodash";

Given('I am on the home page', () => {
    cy.visit('');
  });

When('I click on the renting button', () => {
    cy.get('[data-cy="money"]').first().click()
});

When('I click on the like hero button', () => {
    cy.get('[data-cy="like"]').first().click()
});

Then('I should see a hire warning dialog', () => {
    cy.contains('div', 'You must log in to hire this hero.').should('be.visible');
})

Then('I should see a like warning dialog', () => {
    cy.contains('div', 'You must log in to like.').should('be.visible');
})
