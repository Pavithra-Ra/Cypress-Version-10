import * as iframeElement from '../PageElement/iframeElement'

class IframeDemo {
    checkTitle() {
        cy.title().should('eq', 'The Internet')
    }
    clickFrameLink() {
        cy.contains(iframeElement.iframeHome)
            .click()
    }

    checkValid() {
        cy.contains(iframeElement.iframeHome).should("have.text", "Frames")
    }

    clickIframeLink() {
        cy.contains(iframeElement.iframePage)
            .click()

    }
    verifyPages(verifyText) {

        cy.contains(iframeElement.verifyText1)

    }


    enterIframeMain() {
        cy.get(iframeElement.iframeMain).then(function ($iframe) {

            const iframecontent = $iframe.contents().find('body')

            cy.wrap(iframecontent).clear().type('Hi')
        });
    }

    enterdblClick() {
        cy.get(iframeElement.verifyTexts).dblclick()
        cy.get(iframeElement.enterBold).click()
        cy.contains(iframeElement.enterItalic).click()
    }



}

export default IframeDemo;