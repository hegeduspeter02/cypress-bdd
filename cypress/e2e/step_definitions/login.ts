import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I log in manually with {string}', (username) => {
  const password = 'test123';
  switch (username) {
    case 'admin@test.com':
    case 'test@test.com':
      cy.loginManually(username, password)
      break;
    default:
      throw new Error('Not a valid user please use either admin@test.com or test@test.com');
  };
});

Then('I can see the logout button', () => {
  cy.contains('button', 'Logout').should('be.visible');
});

