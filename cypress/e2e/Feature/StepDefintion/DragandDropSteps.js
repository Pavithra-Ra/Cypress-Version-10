import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import DragAndDrop from '../support/PageObjects/dragAndDropDemo.po'
const dragAndDrop = new DragAndDrop();


Given('User must be in Herokuapp home page', () => {
  
    cy.visit(Cypress.env('UploadURL'))
    dragAndDrop.checkTitle()

});
When('User click the Drap and Drag link', () => {

    dragAndDrop.clickDragLink()

});
And('User must be able to drag the element A to B', () => {

    dragAndDrop.dragElement()

});
And('User must be to drop the element A', () =>
{
  
    dragAndDrop.dropElement()
   
});
Then('User must be in Drop and Drop page', () =>
{
    dragAndDrop.checkValidation()

});

