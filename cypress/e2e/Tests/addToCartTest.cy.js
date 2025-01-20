import { HomePage } from "../../Pages/homePage";
const homePageObject = new HomePage();
import testData from "../../fixtures/testData.json";

describe('Homepage login and add to cart flow',()=>{

    before(()=>{
        cy.login(testData.login.username, testData.login.password);
    })

    it('Add to cart flow',()=>{
        homePageObject.search_product(testData.product.productName);
        homePageObject.addToCart();
        homePageObject.viewSuccess_message().should('contain',testData.message.successMessage).and('contain',testData.product.productName)

    })                                                                  
})