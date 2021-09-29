import BasePage from '../base-page';

// Page Element of Home page


const COMPUTERS_HEADER_MENU = '.notmobile [href="/computers"]';
const DESKTOPS_SUB_MENU_UNDER_COMPUTER_HEADER_MENU = '.notmobile [href="/desktops"]';
const NOTEBOOKS_SUB_MENU_UNDER_COMPUTER_HEADER_MENU = '.notmobile [href="/notebooks"]';
const SOFTWARE_SUB_MENU_UNDER_COMPUTER_HEADER_MENU = '.notmobile [href="/software"]';
const ELECTRONICS_HEADER_MENU = '.notmobile [href="/electronics"]';
const CAMERA_PHOTO_SUB_MENU_UNDER_ELECTRONICS_HEADER_MENU = '.notmobile [href="/electronics"]';
const CELL_PHONES_SUB_MENU_UNDER_ELECTRONICS_HEADER_MENU = '.notmobile [href="/electronics"]';
const OTHERS_SUB_MENU_UNDER_ELECTRONICS_HEADER_MENU = '.notmobile [href="/electronics"]';
const APPAREL_HEADER_MENU = '.notmobile [href="/apparel"]';
const SHOES_SUB_MENU_UNDER_APPAREL_HEADER_MENU = '.notmobile [href="/apparel"]';
const CLOTHING_SUB_MENU_UNDER_APPAREL_HEADER_MENU = '.notmobile [href="/apparel"]';
const ACCESSORIES_SUB_MENU_UNDER_APPAREL_HEADER_MENU = '.notmobile [href="/apparel"]';
const DIGITAL_DOWNLOADS_HEADER_MENU = '.notmobile [href="/digital-downloads"]';
const BOOKS_HEADER_MENU = '.notmobile [href="/books"]';
const JEWELRY_HEADER_MENU = '.notmobile [href="/jewelry"]';
const GIFT_CARDS_HEADER_MENU = '.notmobile [href="/gift-cards"]';




// *********************************************** Display Navigate and Click function of register page *********************************************** 

export default class HomePage extends BasePage {

    BasePage() {
        super.BasePage()
    }

    getComputersHeaderMenu = () => cy.get(COMPUTERS_HEADER_MENU);
    getDesktopsSubMenuUnderComputerHeaderMenu = () => cy.get(DESKTOPS_SUB_MENU_UNDER_COMPUTER_HEADER_MENU);
    getNotebooksSubMenuUnderComputerHeaderMenu = () => cy.get(NOTEBOOKS_SUB_MENU_UNDER_COMPUTER_HEADER_MENU);
    getSoftwareSubMenuUnderComputerHeaderMenu = () => cy.get(SOFTWARE_SUB_MENU_UNDER_COMPUTER_HEADER_MENU);
    getElectronicsHeaderMenu = () => cy.get(ELECTRONICS_HEADER_MENU);
    getCameraPhotoSubMenuUnderElectronicsHeaderMenu = () => cy.get(CAMERA_PHOTO_SUB_MENU_UNDER_ELECTRONICS_HEADER_MENU);
    getCellPhonesSubMenuUnderElectronicsHeaderMenu = () => cy.get(CELL_PHONES_SUB_MENU_UNDER_ELECTRONICS_HEADER_MENU);
    getOthersSubMenuUnderElectronicsHeaderMenu = () => cy.get(OTHERS_SUB_MENU_UNDER_ELECTRONICS_HEADER_MENU);
    getApparelHeaderMenu = () => cy.get(APPAREL_HEADER_MENU);
    getShoesSubMenuUnderApparelHeaderMenu = () => cy.get(SHOES_SUB_MENU_UNDER_APPAREL_HEADER_MENU);
    getClothingSubMenuUnderApparelHeaderMenu = () => cy.get(CLOTHING_SUB_MENU_UNDER_APPAREL_HEADER_MENU);
    getAccessoriesSubMenuUnderApparelHeaderMenu = () => cy.get(ACCESSORIES_SUB_MENU_UNDER_APPAREL_HEADER_MENU);
    getDigitalDownloadsHeaderMenu = () => cy.get(DIGITAL_DOWNLOADS_HEADER_MENU);
    getBooksHeaderMenu = () => cy.get(BOOKS_HEADER_MENU);
    getJewelryHeaderMenu = () => cy.get(JEWELRY_HEADER_MENU);
    getGiftCardsHeaderMenu = () => cy.get(GIFT_CARDS_HEADER_MENU);
  


    // ----------------------------------- Display Funtion ----------------------------------- 

    displayComputersHeaderMenu = () => {
        this.getComputersHeaderMenu().isVisible(COMPUTERS_HEADER_MENU);
        this.logInfo('[Computers Menu] is being displayed');
    };

    displayDesktopsSubMenuUnderComputerHeaderMenu = () => {
        this.getDesktopsSubMenuUnderComputerHeaderMenu().isVisible(DESKTOPS_SUB_MENU_UNDER_COMPUTER_HEADER_MENU);
        this.logInfo('[Desktop Sub menu] is being displayed under [Computer Menu]');
    };

    displayNotebooksSubMenuUnderComputerHeaderMenu = () => {
        this.getNotebooksSubMenuUnderComputerHeaderMenu().isVisible(NOTEBOOKS_SUB_MENU_UNDER_COMPUTER_HEADER_MENU);
        this.logInfo('[Notebooks Sub menu] is being displayed under [Computer Menu]');
    };

    displaySoftwareSubMenuUnderComputerHeaderMenu = () => {
        this.getSoftwareSubMenuUnderComputerHeaderMenu().isVisible(SOFTWARE_SUB_MENU_UNDER_COMPUTER_HEADER_MENU);
        this.logInfo('[Software Sub menu] is being displayed under [Computer Menu]');
    };

    displayElectronicsHeaderMenu = () => {
        this.getElectronicsHeaderMenu().isVisible(ELECTRONICS_HEADER_MENU);
        this.logInfo('[Electronics Menu] is being displayed');
    };

    displayCameraPhotoSubMenuUnderElectronicsHeaderMen = () => {
        this.getCameraPhotoSubMenuUnderElectronicsHeaderMenu().isVisible(CAMERA_PHOTO_SUB_MENU_UNDER_ELECTRONICS_HEADER_MENU);
        this.logInfo('[Camera Photo Sub menu] is being displayed under [Electronics Menu]');
    };

    displayCellPhonesSubMenuUnderElectronicsHeaderMen = () => {
        this.getCellPhonesSubMenuUnderElectronicsHeaderMenu().isVisible(CELL_PHONES_SUB_MENU_UNDER_ELECTRONICS_HEADER_MENU);
        this.logInfo('[Cell Phones Sub menu] is being displayed under [Electronics Menu]');
    };

    displayOthersSubMenuUnderElectronicsHeaderMenu = () => {
        this.getOthersSubMenuUnderElectronicsHeaderMenu().isVisible(OTHERS_SUB_MENU_UNDER_ELECTRONICS_HEADER_MENU);
        this.logInfo('[Others Sub menu] is being displayed under [Electronics Menu]');
    };

    displayApparelHeaderMenu = () => {
        this.getApparelHeaderMenu().isVisible(APPAREL_HEADER_MENU);
        this.logInfo('[Apparel Menu] is being displayed');
    };

    displayShoesSubMenuUnderApparelHeaderMen = () => {
        this.getShoesSubMenuUnderApparelHeaderMenu().isVisible(SHOES_SUB_MENU_UNDER_APPAREL_HEADER_MENU);
        this.logInfo('[Shoes sub menu] is being displayed under [Apparel Menu]');
    };

    displayClothingSubMenuUnderApparelHeaderMen = () => {
        this.getClothingSubMenuUnderApparelHeaderMenu().isVisible(CLOTHING_SUB_MENU_UNDER_APPAREL_HEADER_MENU);
        this.logInfo('[Clothing sub menu] is being displayed under [Apparel Menu]');
    };

    displayAccessoriesSubMenuUnderApparelHeaderMenu = () => {
        this.getAccessoriesSubMenuUnderApparelHeaderMenu().isVisible(ACCESSORIES_SUB_MENU_UNDER_APPAREL_HEADER_MENU);
        this.logInfo('[Accessories sub menu] is being displayed under [Apparel Menu]');
    };

    displayDigitalDownloadsHeaderMenu = () => {
        this.getDigitalDownloadsHeaderMenu().isVisible(DIGITAL_DOWNLOADS_HEADER_MENU);
        this.logInfo('[Digital Downloads Menu] is being displayed');
    };

    displayBooksHeaderMenu = () => {
        this.getBooksHeaderMenu().isVisible(BOOKS_HEADER_MENU);
        this.logInfo('[Books Menu] is being displayed');
    };

    displayJewelryHeaderMenu = () => {
        this.getJewelryHeaderMenu().isVisible(JEWELRY_HEADER_MENU);
        this.logInfo('[Jewelry Menu] is being displayed');
    };

    displayGiftCardsHeaderMenu = () => {
        this.getGiftCardsHeaderMenu().isVisible(GIFT_CARDS_HEADER_MENU);
        this.logInfo('[Jewelry Menu] is being displayed');
    };


    // ----------------------------------- Select Funtion ----------------------------------- 


    // ----------------------------------- Input Funtion ----------------------------------- 

   
    // ----------------------------------- Click Funtion ----------------------------------- 
    
    clickOnComputerHeaderMenu = () => {
        this.displayComputerHeaderMenu();
        this.getComputerHeaderMenu().click();
        this.logInfo('Clicked on [Computers] Menu');
    };

    clickOnDesktopsSubMenuUnderComputerHeaderMenu = () => {
        this.displayDesktopsSubMenuUnderComputerHeaderMenu();
        this.getDesktopsSubMenuUnderComputerHeaderMenu().click();
        this.logInfo('Clicked on [Desktops] sub Menu under [Computers]');
    };

}
