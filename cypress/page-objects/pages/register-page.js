import BasePage from '../base-page';

// Page Element of Home page


const REGISTER_HEADER_TEXT = 'h1';
const YOUR_PERSONAL_DETAILS_TITLE_TEXT = '[method="post"] > div:nth-of-type(1) strong';
const MALE_GENDER_RADIO_BUTTON = '#gender-male';
const FEMALE_GENDER_RADIO_BUTTON = '#gender-female';
const FIRST_NAME_INPUT_BOX = '#FirstName';
const LAST_NAME_INPUT_BOX = '#LastName';
const DATE_OF_BIRTH_DAY_DROPDOWN_MENU = '[name="DateOfBirthDay"]';
const DATE_OF_BIRTH_MONTH_DROPDOWN_MENU = '[name="DateOfBirthMonth"]';
const DATE_OF_BIRTH_YEAR_DROPDOWN_MENU = '[name="DateOfBirthYear"]';
const EMAIL_INPUT_BOX = '#Email';
const COMPANY_DETAILS_TITLE_TEXT = '[method="post"] > div:nth-of-type(2) strong';
const COMPANY_NAME_INPUT_BOX = '#Company';
const OPTIONS_TITLE_TEXT = '[method="post"] > div:nth-of-type(3) strong';
const NEWSLETTER_CHECKBOX = '#Newsletter';
const YOUR_PASSWORD_TITLE_TEXT = '[method="post"] > div:nth-of-type(4) strong';
const PASSWORD_INPUT_BOX = '#Password';
const CONFIRM_PASSWORD_INPUT_BOX = '#ConfirmPassword';
const REGISTER_BUTTON = '#register-button';





// *********************************************** Display Navigate and Click function of register page *********************************************** 

export default class HomePage extends BasePage {

    BasePage() {
        super.BasePage()
    }

    getRegisterHeaderText = () => cy.get(REGISTER_HEADER_TEXT);
    getYourPersonalDetailsTitleText = () => cy.get(YOUR_PERSONAL_DETAILS_TITLE_TEXT);
    getMaleGenderRadioButton = () => cy.get(MALE_GENDER_RADIO_BUTTON);
    getFemaleGenderRadioButton = () => cy.get(FEMALE_GENDER_RADIO_BUTTON);
    getFirstNameInputBox = () => cy.get(FIRST_NAME_INPUT_BOX);
    getLastNameInputBox = () => cy.get(LAST_NAME_INPUT_BOX);
    getDateOfBirthDayDropdownMenu = () => cy.get(DATE_OF_BIRTH_DAY_DROPDOWN_MENU);
    getDateOfBirthMonthDropdownMenu = () => cy.get(DATE_OF_BIRTH_MONTH_DROPDOWN_MENU);
    getDateOfBirthYearDropdownMenu = () => cy.get(DATE_OF_BIRTH_YEAR_DROPDOWN_MENU);
    getEmailInputBox = () => cy.get(EMAIL_INPUT_BOX);
    getCompanyDetailsTitleText = () => cy.get(COMPANY_DETAILS_TITLE_TEXT);
    getCompanyNameInputBox = () => cy.get(COMPANY_NAME_INPUT_BOX);
    getOptionsTitleText = () => cy.get(OPTIONS_TITLE_TEXT);
    getNewsletterCheckbox = () => cy.get(NEWSLETTER_CHECKBOX);
    getYourPasswordTitleText = () => cy.get(YOUR_PASSWORD_TITLE_TEXT);
    getPasswordInputBox = () => cy.get(PASSWORD_INPUT_BOX);
    getConfirmPasswordInputBox = () => cy.get(CONFIRM_PASSWORD_INPUT_BOX);
    getRegisterButton = () => cy.get(REGISTER_BUTTON);


    // ----------------------------------- Display Funtion ----------------------------------- 

    displayRegisterHeaderText = () => {
        this.getRegisterHeaderText().isVisible(REGISTER_HEADER_TEXT);
        this.logInfo('[Register] text is being displayed');
    };

    displayYourPersonalDetailsTitleText = () => {
        this.getYourPersonalDetailsTitleText().isVisible(YOUR_PERSONAL_DETAILS_TITLE_TEXT);
        this.logInfo('[Your Personal Details] text is being displayed');
    };

    displayMaleGenderRadioButton = () => {
        this.getMaleGenderRadioButton().isVisible(MALE_GENDER_RADIO_BUTTON);
        this.logInfo('[Male] radio button is being displayed');
    };

    displayFemaleGenderRadioButton = () => {
        this.getFemaleGenderRadioButton().isVisible(FEMALE_GENDER_RADIO_BUTTON);
        this.logInfo('[Female] radio button is being displayed');
    };

    displayFirstNameInputBox = () => {
        this.getFirstNameInputBox().isVisible(FIRST_NAME_INPUT_BOX);
        this.logInfo('[First Name] input box is being displayed');
    };

    displayLastNameInputBox = () => {
        this.getLastNameInputBox().isVisible(LAST_NAME_INPUT_BOX);
        this.logInfo('[Last Name] input box is being displayed');
    };

    displayDateOfBirtDayDropdownMenu = () => {
        this.getDateOfBirthDayDropdownMenu().isVisible(DATE_OF_BIRTH_DAY_DROPDOWN_MENU);
        this.logInfo('[Date of Birth Day] dropdown menu is being displayed');
    };

    displayDateOfBirthMonthDropdownMenu = () => {
        this.getDateOfBirthMonthDropdownMenu().isVisible(DATE_OF_BIRTH_MONTH_DROPDOWN_MENU);
        this.logInfo('[Date of Birth Month] dropdown menu is being displayed');
    };

    displayDateOfBirthYearDropdownMenu = () => {
        this.getDateOfBirthYearDropdownMenu().isVisible(DATE_OF_BIRTH_YEAR_DROPDOWN_MENU);
        this.logInfo('[Date of Birth Year] dropdown menu is being displayed');
    };

    displayEmailInputBox = () => {
        this.getEmailInputBox().isVisible(EMAIL_INPUT_BOX);
        this.logInfo('[Email] input box is being displayed');
    };

    displayCompanyDetailsTitleText = () => {
        this.getCompanyDetailsTitleText().isVisible(COMPANY_DETAILS_TITLE_TEXT);
        this.logInfo('[Company Details] text is being displayed');
    };

    displayCompanyNameInputBox = () => {
        this.getCompanyNameInputBox().isVisible(COMPANY_NAME_INPUT_BOX);
        this.logInfo('[Company Name] input box is being displayed');
    };

    displayOptionsTitleText = () => {
        this.getOptionsTitleText().isVisible(OPTIONS_TITLE_TEXT);
        this.logInfo('[Options] text is being displayed');
    };

    displayNewsletterCheckbox = () => {
        this.getNewsletterCheckbox().isVisible(NEWSLETTER_CHECKBOX);
        this.logInfo('[Newsletter] checkbox is being displayed');
    };

    displayYourPasswordTitleText = () => {
        this.getYourPasswordTitleText().isVisible(YOUR_PASSWORD_TITLE_TEXT);
        this.logInfo('[Your Password] text is being displayed');
    };

    displayPasswordInputBox = () => {
        this.getPasswordInputBox().isVisible(PASSWORD_INPUT_BOX);
        this.logInfo('[Password] input box is being displayed');
    };

    displayConfirmPasswordInputBox = () => {
        this.getConfirmPasswordInputBox().isVisible(CONFIRM_PASSWORD_INPUT_BOX);
        this.logInfo('[Confirm Password] input box is being displayed');
    };

    displayRegisterButton = () => {
        this.getRegisterButton().isVisible(REGISTER_BUTTON);
        this.logInfo('[Register] Button is being displayed');
    };




    // ----------------------------------- Select Funtion ----------------------------------- 


    selectMaleGenderRadioButton = () => {
        this.displayMaleGenderRadioButton();
        this.getMaleGenderRadioButton().click();
        this.logInfo('[Male] radio button has been selected');
    };

    selectFemaleGenderRadioButton = () => {
        this.displayFemaleGenderRadioButton();
        this.getFemaleGenderRadioButton().click();
        this.logInfo('[Female] radio button has been selected');
    };


    // ----------------------------------- Input Funtion ----------------------------------- 

    inputFirstName = () => {
        cy.fixture('loginCredentials').then((data) => {
            const FIRST_NAME = data.firstName;
            this.displayFirstNameInputBox();
            this.getFirstNameInputBox().clear();
            this.logInfo('[First Name] input box has been cleared');
            this.getFirstNameInputBox().type(FIRST_NAME);
            this.logInfo('First name has been entered in [First Name] input box');
        });
    };

    inputLastName = () => {
        cy.fixture('loginCredentials').then((data) => {
            const Last_NAME = data.lastName;
            this.displayLastNameInputBox();
            this.getLastNameInputBox().clear();
            this.logInfo('[Last Name] input box has been cleared');
            this.getLastNameInputBox().type(Last_NAME);
            this.logInfo('Last name has been entered in [Last Name] input box');
        });
    };

    inputEmail = () => {
        cy.fixture('loginCredentials').then((data) => {
            const EMAIL = data.email;
            this.displayEmailInputBox();
            this.getEmailInputBox().clear();
            this.logInfo('[Email] input box has been cleared');
            this.getEmailInputBox().type(EMAIL);
            this.logInfo('Email has been entered in [Email Name] input box');
        });
    };

    inputCompanyName = () => {
        cy.fixture('loginCredentials').then((data) => {
            const COMPANY_NAME = data.companyName;
            this.displayCompanyNameInputBox();;
            this.getCompanyNameInputBox().clear();
            this.logInfo('[Company Name] input box has been cleared');
            this.getCompanyNameInputBox().type(COMPANY_NAME);
            this.logInfo('Company name has been entered in [Company Name] input box');
        });
    };

    inputPassword = () => {
        cy.fixture('loginCredentials').then((data) => {
            const PASSWORD = data.password;
            this.displayPasswordInputBox();
            this.getPasswordInputBox().clear();
            this.logInfo('[Password] input box has been cleared');
            this.getPasswordInputBox().type(PASSWORD);
            this.logInfo('Password has been entered in [Password] input box');
        });
    };

    inputConfirmPassword = () => {
        cy.fixture('loginCredentials').then((data) => {
            const CONFIRM_PASSWORD = data.confirmPassword;
            this.displayConfirmPasswordInputBox();
            this.getConfirmPasswordInputBox().clear();
            this.logInfo('[Confirm Password] input box has been cleared');
            this.getConfirmPasswordInputBox().type(PASSWORD);
            this.logInfo('Confirm Password has been entered in [Confirm Password] input box');
        });
    };

    // ----------------------------------- Click Funtion ----------------------------------- 
    
    clickOnRegisterLink = () => {
        this.displayRegisterLink();
        this.getRegisterLink().click();
        this.logInfo('Clicked on [Register] link');
    };

}
