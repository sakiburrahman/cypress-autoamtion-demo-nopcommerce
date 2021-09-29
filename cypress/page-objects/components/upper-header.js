import BasePage from '../base-page';

// Page Element of Home page


const CUSTOMER_CURRENCY_DROPDOWN_MENU = '#customerCurrency';
const CUSTOMER_CURRENCY_DROPDOWN_MENU_VALUE_US = '#customerCurrency > option:nth-child(1)';
const CUSTOMER_CURRENCY_DROPDOWN_MENU_VALUE_EURO = '#customerCurrency > option:nth-child(2)';
const REGISTER_LINK = '.ico-register';
const LOGIN_LINK = '.ico-login';
const LOGOUT_LINK = '.ico-logout';
const WISHLIST_LINK = '.wishlist-label';
const SHOPPING_CART_LINK = '.cart-label';





// *********************************************** Display Navigate and Click function of register page *********************************************** 

export default class HomePage extends BasePage {

    BasePage() {
        super.BasePage()
    }

    getCustomerCurrencyDropdownMenu = () => cy.get(CUSTOMER_CURRENCY_DROPDOWN_MENU);
    getCustomerCurrencyDropdownMenuValueUS = () => cy.get(CUSTOMER_CURRENCY_DROPDOWN_MENU_VALUE_US);
    getCustomerCurrencyDropdownMenuEURO = () => cy.get(CUSTOMER_CURRENCY_DROPDOWN_MENU_VALUE_EURO);
    getRegisterLink = () => cy.get(REGISTER_LINK);
    getLoginLink = () => cy.get(LOGIN_LINK);
    getLogoutLink = () => cy.get(LOGOUT_LINK);
    getWishlistLink = () => cy.get(WISHLIST_LINK);
    getShoppingCartLink = () => cy.get(SHOPPING_CART_LINK);

    // ----------------------------------- Display Funtion ----------------------------------- 

    displayCustomerCurrencyDropdownMenu = () => {
        this.getCustomerCurrencyDropdownMenu().isVisible(CUSTOMER_CURRENCY_MENU);
        this.logInfo('[Customer Currency] dropdown menu is being displayed');
    };

    displayCustomerCurrencyDropdownMenuValueUS = () => {
        this.getCustomerCurrencyDropdownMenuValueUS().isVisible(CUSTOMER_CURRENCY_MENU_VALUE_US);
        this.logInfo('[US Dollar] dropdown value is being displayed');
    };

    displayCustomerCurrencyDropdownMenuEURO = () => {
        this.getCustomerCurrencyDropdownMenuEURO().isVisible(CUSTOMER_CURRENCY_MENU_VALUE_EURO);
        this.logInfo('[Euro] dropdown value is being displayed');
    };

    displayRegisterLink = () => {
        this.getRegisterLink().isVisible(REGISTER_LINK);
        this.logInfo('[Register] link is being displayed');
    };

    displayLoginLink = () => {
        this.getLoginLink().isVisible(LOGIN_LINK);
        this.logInfo('[Login] link is being displayed');
    };

    displayLogoutLink = () => {
        this.getLogoutLink().isVisible(LOGOUT_LINK);
        this.logInfo('[Logout] link is being displayed');
    };

    displayWishlistLink = () => {
        this.getWishlistLink().isVisible(WISHLIST_LINK);
        this.logInfo('[Wishlist] link is being displayed');
    };

    displayShoppingCartLink = () => {
        this.getShoppingCartLink().isVisible(SHOPPING_CART_LINK);
        this.logInfo('[Shopping Cart] link is being displayed');
    };


    // ----------------------------------- Click Funtion ----------------------------------- 


    clickOnCustomerCurrencyDropdownMenu = () => {
        this.displayCustomerCurrencyDropdownMenu();
        this.getCustomerCurrencyDropdownMenu().click();
        this.logInfo('Clicked on [Customer Currency] dropdown menu');
    };

    clickOnRegisterLink = () => {
        this.displayRegisterLink();
        this.getRegisterLink().click();
        this.logInfo('Clicked on [Register] link');
    };


    // ----------------------------------- Input Funtion ----------------------------------- 

    inputUsername = () => {
        cy.fixture('loginCredentials').then((data) => {
            const USERNAME = data.loginUsername;
            this.getEmailUsernameInputBox().isVisible(
                EMAIL_USERNAME_INPUT_BOX
            );
            this.logInfo('[Email or Username] input box is being displayed');
            this.getEmailUsernameInputBox().clear();
            this.logInfo('[Email or Username] input box has been cleared');
            this.getEmailUsernameInputBox().type(USERNAME);
            this.logInfo(
                'Username/Email has been entered in [Email or Username] input box'
            );

        });
    };

    inputPassword = () => {
        cy.fixture('loginCredentials').then((data) => {
            const PASSWORD = data.loginPassword;
            this.getPasswordInputBox().isVisible(PASSWORD_INPUT_BOX);
            this.logInfo('[Password] input box is being displayed');
            this.getPasswordInputBox().clear();
            this.logInfo('[Password] input box has been cleared');
            this.getPasswordInputBox().type(PASSWORD);
            this.logInfo('Password has been entered in [Password] input box');

        });
    };




}
