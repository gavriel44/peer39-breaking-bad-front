/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

describe("Home Page tests", () => {
  const firstEpisodes = [
    "Pilot",
    "Seven-Thirty-Seven",
    "No Más",
    "Box Cutter",
    "Live Free of Die",
  ];
  beforeEach(() => {
    cy.visit("/");
  });

  it("visit every season first episode", () => {
    firstEpisodes.forEach((episodeTitle) => {
      cy.contains(episodeTitle).click();
      cy.contains(episodeTitle);
      cy.location().should((loc) => {
        expect(loc.pathname).to.match(/\/episodes\/[0-9]{0,2}$/);
      });

      cy.visit("/");
    });
  });

  it("Scroll carousel", () => {
    cy.contains("Pilot");
    cy.contains("Crazy Handful of Nothin").should("be.hidden");
    cy.get(".react-multiple-carousel__arrow--right").first().click();
    cy.contains("Crazy Handful of Nothin").should("be.visible");
  });
});
