export class HomePage{

    webLocators = {
        search_input : 'input[name="search"]',
        click_search : '#search > span > button',
        product : 'img[title="MacBook"]',
        addToCart : '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:first-child',
        success_message : 'div.alert.alert-success.alert-dismissible '
    }

    search_product(ProductName){
           cy.get(this.webLocators.search_input).type(ProductName);
           cy.get(this.webLocators.click_search).click();
    }
    addToCart(){
        cy.get(this.webLocators.addToCart).click();
    }
    viewSuccess_message(){
        return cy.get(this.webLocators.success_message);
    }
}