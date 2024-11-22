/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare module Cypress {
  interface Chainable {
    loginManually(username: string, password: string): void;
    login(username: string, password: string): void;
  }
};

const loginManually = (username: string, password: string) => {
  cy.visit('');
  cy.get('button').contains('Login').click();
  cy.get('[data-cy="email"]').type(username);
  cy.get('[data-cy="password"]').type(password);
  cy.get('button').contains('Sign in').click();
}

const login = (username: string, password: string) => {
  cy.session(
    username,
    () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3001/auth',
        body: {
          username: username,
          password: password
        },
        log: false
      }).then((res) => {
        localStorage['accessToken'] = res.body.access_token
      });
    },
    {
      cacheAcrossSpecs: true
    }
  );
  cy.visit('');
}

Cypress.Commands.add('loginManually', loginManually);
Cypress.Commands.add('login', login);