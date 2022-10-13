import * as multipleWindowElement  from '../PageElement/multipleWindowElement'

class MultipleWindow{

    checkTitle() {
        cy.title().should('eq', 'The Internet')
        }

    clickWindowButton(){

        cy.contains(multipleWindowElement.windowElement).click()

    }
    
    clickHereButton(){

        cy.contains(multipleWindowElement.clickHereElement)
        .invoke("removeAttr", "target")
        .click()
    }
    checkAssert(){
        cy.get("href").should("have.text","Click Here")
      
    }

}
export default MultipleWindow;

