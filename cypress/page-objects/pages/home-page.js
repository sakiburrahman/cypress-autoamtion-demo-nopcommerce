import BasePage from '../base-page';

// Page Element of Home page

const WELCOME_TEXT = '//h1[.="Welcome, Please Sign In!"]'; 
const CUSTOMER_CURRENCY_MENU = '#customerCurrency'; 
const CUSTOMER_CURRENCY_MENU_VALUE_US = '#customerCurrency > option:nth-child(1)';
const CUSTOMER_CURRENCY_MENU_VALUE_EURO = '#customerCurrency > option:nth-child(2)';
const REGISTER_LINK = '.ico-register';
const LOGIN_LINK = '.ico-login';
const WISHLIST_LINK = '.wishlist-label';
const SHOPPING_CART_LINK = '.cart-label';
const SEARCH_TEXT_BOX = '#small-searchterms';
const SEARCH_BUTTON = '.cart-label';




// Display Navigate and Click function of Home Page

export default class HomePage extends BasePage{
  
    BasePage(){
        super.BasePage()
    }

    getWelcomeText= () => cy.get(WELCOME_TEXT);
    getEntitiesSortingDropdown = () => cy.get(ENTITIES_SORTING_DROPDOWN);
    getExpertCornerHeaderText = () => cy.get(EXPERT_CORNER_HEADER_TEXT);
    getTaxNewsHeaderText = () => cy.get(TAXNEWS_HEADER_TEXT);
    getTaxnewsViewAllLink = () => cy.get(TAXNEWS_VIEW_ALL_LINK);
    getByDefaultDetailsToggleHeader = () => cy.get(BY_DEFAULT_DETAILS_TOGGLE_HEADER);
    

    displayWelcomeText = () => {
        this.getHomePageHeaderText().isVisible(WELCOME_TEXT);
        this.getHomePageHeaderText().contains('Welcome, Please Sign In!')
        this.logInfo('[Welcome, Please Sign In!] text is being displayed');
    };

    displayCustomerCurrencyMenu = () => {
        this.getEntitiesSortingDropdown().isVisible(CUSTOMER_CURRENCY_MENU);
        this.logInfo('[Customer Currency Menu] dropdown is being displayed');
    };



}
