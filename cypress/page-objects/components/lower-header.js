import BasePage from "../base-page";


// Page Element CSS Selectors 


const RIGHT_SIDE_TOGGLE_PANEL_HEADER_TEXT= 'div.chat-header > div'
const RIGHT_SIDE_TOGGLE_PANEL_CROSS_ICON = 'div.chat-header > button:nth-of-type(1) .mat-icon'



export default class rightSideToggleBar extends BasePage{


    BasePage(){
        super.BasePage()
    }

    getRightSideTogglePanelHeaderText= () => cy.get(RIGHT_SIDE_TOGGLE_PANEL_HEADER_TEXT);
    getRightSideTogglePanelCrossIcon = () => cy.get(RIGHT_SIDE_TOGGLE_PANEL_CROSS_ICON);

    displayRightSideTogglePanelHeaderText = (text) => {
        this.getRightSideTogglePanelHeaderText().isVisible(RIGHT_SIDE_TOGGLE_PANEL_HEADER_TEXT);
        this.getRightSideTogglePanelHeaderText().contains(text)
        this.logInfo('Correct Header is is being displayed on Toggle panel');
    };

    displayRightSideTogglePanelCrossIcon = () => {
        this.getRightSideTogglePanelCrossIcon().isVisible(RIGHT_SIDE_TOGGLE_PANEL_CROSS_ICON);
        this.logInfo('[Cross] icon is being displayed');
    };
    
    clickOnRightSideTogglePanelCrossIcon = () => {
        this.getRightSideTogglePanelCrossIcon().isVisible(RIGHT_SIDE_TOGGLE_PANEL_CROSS_ICON);
        this.getRightSideTogglePanelCrossIcon().click()
        this.logInfo('Clicked on [Cross] icon fro toggle panel');
    };
    
}
