// import cypressConfig from '../../cypress.config.js';
import FileUploadDemo from '../support/PageObjects/fileUploadDemo.po'
const fileUploadDemo = new FileUploadDemo()


describe("Upload Tests", () => {
  it("upload file", () =>{
      
    cy.visit(Cypress.env('UploadURL'))
    fileUploadDemo.checkTitle()
    fileUploadDemo.clickFileUploadHome()
    fileUploadDemo.clickFileUpload()
    fileUploadDemo.clickFileSubmit()
    
  });
});

