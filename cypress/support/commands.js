import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

import '@percy/cypress';
import BasePage from '../page-objects/base-page';

import HomePage from '../page-objects/pages/home-page';
import LoginPage from '../page-objects/pages/login-page'
import LeftMenuBar from '../page-objects/components/left-menu-bar';

var basePage = new BasePage();
var loginPage = new LoginPage();
var homePage = new HomePage();
var leftMenuBar = new LeftMenuBar()



// const CHECKPOINT_LOGIN_BUTTON = "Login with Checkpoint";
// const CHECKPOINT_WORLD_LOGIN_BUTTON = "Login with Checkpoint World";
// const EMAIL_USERNAME_INPUT_BOX = "#UserId";
// const PASSWORD_INPUT_BOX = "#Password";
// const LOGIN_TO_ORBITAX_BUTTON = ".login-btn";
// const REMEMBER_ME_CHECKBOX = "#RememberMe";
// const FORGOT_PASSWORD_LINK = "Forgot Password?";
// const CREATE_A_FREE_LINK = "Create a free account";

// addMatchImageSnapshotCommand({
//     failureTreshold: 0.00,
//     failureTresholdType: "percent",
//     customDiffConfig: { treshold: 0.0 },
//     capture: "viewport"

// })


if (Cypress.config('isInteractive')) {
    Cypress.Commands.add('matchImageSnapshot', () => {
        basePage.logInfo('Skipping snapshot 👀')
    })
} else {
    addMatchImageSnapshotCommand({
        failureThreshold: 0.00,
        failureThresholdType: 'percent',
        customDiffConfig: { threshold: 0.0 },
        capture: "viewport"

    })
}

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible');
})

Cypress.Commands.add('isEnable', selector => {
    cy.get(selector).should('be.enabled');
})

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist');
})

Cypress.Commands.add('setResolution', size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
})



Cypress.Commands.add('validLoginToITP', (username, password) => {
    
    loginPage.navigateToUrl();
    loginPage.displayLoginWithCheckpointButton();
    loginPage.displayLoginWithCheckpointWorldButton();
    loginPage.displayRememberMeCheckbox();
    loginPage.displayForgotPasswordLink();
    loginPage.displayCreateAFreeAccountLink();
    loginPage.inputUsername();
    loginPage.inputPassword();
    loginPage.clickOnLoginToOrbitax();
    loginPage.displaySelectCompanyText();
    loginPage.displayRememberMyChoiceCheckbox();
    loginPage.selectACompany();
    loginPage.clickOnLogin();

})


Cypress.Commands.add('shouldLoadHomePage', (username, password) => {

    homePage.displayHomePageHeaderText();
    homePage.displayEntitiesSortingDropdown();
    homePage.displayExpertCornerHeaderText();
    homePage.displayTaxNewsHeaderText();
    homePage.displayTaxnewsViewAllLink();
    homePage.displayByDefaultDetailsToggleHeader();


})

Cypress.Commands.add('shouldLoadAllLeftSideMenu', (username, password) => {
    // LoginPage.navigateToUrl()

    leftMenuBar.displayProjectSettingsMenu();
    leftMenuBar.displayITRCEMenu();

})