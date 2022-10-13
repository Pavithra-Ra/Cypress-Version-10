import DragAndDrop from '../support/PageObjects/dragAndDropDemo.po'
const dragAndDrop = new DragAndDrop();

describe('Drag and Drop', () => {

  it('should drag and drop',  () => {

   cy.visit(Cypress.env('UploadURL'))
   dragAndDrop.checkTitle()
   dragAndDrop.clickDragLink()
   dragAndDrop.dragElement()
   dragAndDrop.dropElement()
   dragAndDrop.checkValidation()

  });
});
   