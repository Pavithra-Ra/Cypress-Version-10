import MultipleWindow from '../support/PageObjects/multipleWindowDemo.po'
const multipleWindow = new MultipleWindow()

describe('Multiple Window', () => {
  it("Handle Multiple Window", () => {

    cy.visit(Cypress.env('UploadURL'))
    multipleWindow.checkTitle()
    multipleWindow.clickWindowButton()
    multipleWindow.clickHereButton()

  });
});