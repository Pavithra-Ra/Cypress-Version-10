import * as fileUploadElement from '../PageElement/FileUploadElements'

class FileUploadDemo{

checkTitle() {
    cy.title().should('eq', 'The Internet')
    }

clickFileUploadHome(){
    cy.contains(fileUploadElement.fileUploadHome).click()
}    


clickFileUpload(){
    cy.get(fileUploadElement.fileUpload)
    .attachFile("pngtree-rustic-flower-graphic-png-image_2368863.jpg")
}

clickFileSubmit(){
    cy.get(fileUploadElement.fileSubmit).click()
}
}
export default FileUploadDemo;