
import BasePage from '../../page-objects/base-page'


describe('Authentify login at nopcommerce web application using valid credentials is working', () => {
    var basePage = new BasePage();
    // var loginPage = new LoginPage();
    // var homePage = new HomePage();
    // var leftMenuBar = new LeftMenuBar();
    // var formsGridPage = new FormsGridPage();

    before(function () {

        // Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        // cy.validLoginToITP();
        // cy.shouldLoadHomePage();
        // basePage.logInfo('Home page loaded and displayed')
        // cy.shouldLoadAllLeftSideMenu();
        // basePage.logInfo('Left side menu displayed');
        // cy.percySnapshot('login Page');
        cy.validLoginToITP();
        

    })

    it('Should login successfully with valid credentials and should open itp home page', () => {
        cy.shouldLoadHomePage();
        basePage.logInfo('Home page loaded and is being displayed')

    })

    it('Should display left side menu bar', () => {

        cy.shouldLoadAllLeftSideMenu();
        basePage.logInfo('Left side menu is being displayed');
        // cy.percySnapshot('login Page');

    })


})


