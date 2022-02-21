/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

describe("Character Page test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("character page test", () => {
    cy.contains("Pilot").click();
    cy.contains("Walter White").click();
    cy.contains("Heisenberg");
    cy.get("#character-image").should("be.visible");
  });
});
