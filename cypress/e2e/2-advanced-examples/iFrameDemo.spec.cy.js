import IframeDemo from '../../support/PageObjects/iframeDemo.po'
const iframeDemo = new IframeDemo();

describe('Iframe Test Case', () => {

    it('for iframe', () => {

         cy.visit(Cypress.env('UploadURL'))
         iframeDemo.checkTitle()
         iframeDemo.clickFrameLink()
         iframeDemo.checkValid()
         iframeDemo.clickIframeLink()
         iframeDemo.verifyPages()
         iframeDemo.enterIframeMain()
         
  });

});