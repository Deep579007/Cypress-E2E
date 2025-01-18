export class registerPage{

    webLocators = {
     
        firstName : '#input-firstname',
        lastName : '#input-lastname',
        email : '#input-email',
        telephone : '#input-telephone',
        password : '#input-password',
        passwordConfirm : '#input-confirm',
        policyCheckbox : 'input[type="checkbox"]',
        submitButton : 'input[type="submit"]'
    }
    openURL (){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName (Fname){
        cy.get(this.webLocators.firstName).type(Fname)
    }
    enterLastName (Lname){
        cy.get(this.webLocators.lastName).type(Lname)
    }
    enterEmail (Email){
        cy.get(this.webLocators.email).type(Email)
    }
    enterTelephone (phoneNo){
        cy.get(this.webLocators.telephone).type(phoneNo)
    }
    enterPassword (Password){
        cy.get(this.webLocators.password).type(Password)
        cy.get(this.webLocators.passwordConfirm).type(Password)
    }
    selectPolicy(){
        cy.get(this.webLocators.policyCheckbox).check()
    }
    submitForm(){
        cy.get(this.webLocators.submitButton).click()
    }
}