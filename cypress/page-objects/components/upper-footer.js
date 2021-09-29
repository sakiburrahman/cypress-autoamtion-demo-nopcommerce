import BasePage from '../base-page';

// Page Element CSS Selectors 

const CHECKPOINT_LOGIN_BUTTON = ':nth-child(1) > .external-login'; 
const CHECKPOINT_WORLD_LOGIN_BUTTON = ':nth-child(2) > .external-login';
const EMAIL_USERNAME_INPUT_BOX = '#UserId';
const PASSWORD_INPUT_BOX = '#Password';
const LOGIN_TO_ORBITAX_BUTTON = '.login-btn';
const REMEMBER_ME_CHECKBOX = '#RememberMe';
const FORGOT_PASSWORD_LINK = '.forgotPassword';
const CREATE_A_FREE_ACCOUNT_LINK = '.forgotPassword';
const REMEMBER_MY_CHOICE_CHECKBOX = '#RememberMyChoice';
const SELECT_COMPANY_TEXT = 'h1';
const SELECTED_COMPANY_NAME =
    ':nth-child(2) > .box-style > .content > :nth-child(2)';
const LOGIN_BUTTON =
    '#loginForm > form > div > div.input-container > div:nth-child(3) > button';



// Page Element of Login page
export default class LoginPage extends BasePage{
  
    BasePage(){
        super.BasePage()
    }

    getCheckPointLoginButton = () => cy.get(CHECKPOINT_LOGIN_BUTTON);
    getCheckPointWorldLoginButton = () => cy.get(CHECKPOINT_WORLD_LOGIN_BUTTON);
    getEmailUsernameInputBox = () => cy.get(EMAIL_USERNAME_INPUT_BOX);
    getPasswordInputBox = () => cy.get(PASSWORD_INPUT_BOX);
    getLoginToOrbitaxButton = () => cy.get(LOGIN_TO_ORBITAX_BUTTON);
    getRememberMeCheckbox = () => cy.get(REMEMBER_ME_CHECKBOX);
    getForgotPasswordLink = () => cy.get(FORGOT_PASSWORD_LINK);
    getCreateAFreeAccountLink = () => cy.get(CREATE_A_FREE_ACCOUNT_LINK);
    getRememberMyChoiceCheckbox = () => cy.get(REMEMBER_MY_CHOICE_CHECKBOX);
    getSelectCompanyText = () => cy.get(SELECT_COMPANY_TEXT);
    getSelectedCompanyName = () => cy.get(SELECTED_COMPANY_NAME);
    getLoginButton = () => cy.get(LOGIN_BUTTON);


// Display Navigate and Click function of Login Page

    navigateToUrl = () => {
        cy.fixture('loginCredentials').then((data) => {
            const URL = data.websiteUrl;
            cy.visit(URL);
            this.logInfo('Website loaded successfully');
            // cy.clearCookies();
            this.logInfo('Cookies has been cleared');
           
        });
    };

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

    clickOnLoginToOrbitax = () => {
        this.getLoginToOrbitaxButton().isVisible(LOGIN_TO_ORBITAX_BUTTON);
        this.getLoginToOrbitaxButton().click();
        this.logInfo('Clicked on [Login to Orbitax] button');
    };

    displayLoginWithCheckpointButton = () => {
        this.getCheckPointLoginButton().isVisible(CHECKPOINT_LOGIN_BUTTON);
        this.logInfo('[Login with Checkpoint] button is being displayed');
    };

    displayLoginWithCheckpointWorldButton = () => {
        this.getCheckPointWorldLoginButton().isVisible(
            CHECKPOINT_WORLD_LOGIN_BUTTON
        );
        this.logInfo('[Login with Checkpoint World] button is being displayed');
    };

    displayRememberMeCheckbox = () => {
        this.getRememberMeCheckbox().isVisible(REMEMBER_ME_CHECKBOX);
        this.logInfo('[Remember me] checkbox is being displayed');
    };

    displayForgotPasswordLink = () => {
        this.getForgotPasswordLink().isVisible(FORGOT_PASSWORD_LINK);
        this.logInfo('[Forgot Password] link is being displayed');
    };

    displayCreateAFreeAccountLink = () => {
        this.getCreateAFreeAccountLink().isVisible(
            CREATE_A_FREE_ACCOUNT_LINK
        );
        this.logInfo('[Create a Free Account] link is being displayed');
    };

    displaySelectCompanyText = () => {
        this.getSelectCompanyText().should('have.text', 'Select Company');
        this.logInfo('[Select Company] text is being displayed');
    };

    displayRememberMyChoiceCheckbox = () => {
        this.getRememberMyChoiceCheckbox().isVisible(
            REMEMBER_MY_CHOICE_CHECKBOX
        );
        this.logInfo('[Remember my choice] checkbox is being displayed');
    };

    selectACompany = () => {
        cy.fixture('loginCredentials').then((data) => {
            const COMPANY = data.companyName;
            this.getSelectedCompanyName().should('have.text', COMPANY);
            this.logInfo('Company Name is being displayed');
            this.getSelectedCompanyName().click();
            this.logInfo('Company has been selected');
        });
    };

    clickOnLogin = () => {
        this.getLoginButton().isVisible(LOGIN_BUTTON);
        this.logInfo('[Login] button is being displayed');
        this.getLoginButton().click();
        this.logInfo('Clicked on[Login] button');
    };

    etXVersionCookies = () => {
        cy.fixture('loginCredentials').then((data) => {
            const X_VERSION = data.version;
            cy.setCookie('x-version', X_VERSION);
            this.logInfo('X-version cookies has been set up');
        });
    };
}
