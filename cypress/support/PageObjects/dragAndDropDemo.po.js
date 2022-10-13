import * as dragAndDropElement from '../PageElement/dragAndDropElement'
const dataTransfer = new DataTransfer();
class DragAndDrop{

checkTitle() {
    cy.title().should('eq', 'The Internet')
        }

clickDragLink(){
    cy.contains(dragAndDropElement.dragHomePage)
    .should("have.text","Drag and Drop")
    .click()
}
dragElement(){
    cy.get(dragAndDropElement.elementA).trigger('dragstart',{dataTransfer
    });
}
dropElement(){
    cy.get(dragAndDropElement.elementB).trigger('drop',{dataTransfer
    });
}
checkValidation(){

    cy.contains(dragAndDropElement.draggedElement)
    .should("have.text", "B")

}
}

export default DragAndDrop;