/// <reference types="cypress" />

import { registerPage } from "../../Pages/registerPage";
import registerData from "../../fixtures/registerData.json";
const registerObj = new registerPage();

describe('Resgister Page Component', ()=>{

    it('Register Form',()=>{
        registerObj.openURL();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephone(registerData.telephone);
        registerObj.enterPassword(registerData.password);
        registerObj.selectPolicy();
        registerObj.submitForm();

    })
})