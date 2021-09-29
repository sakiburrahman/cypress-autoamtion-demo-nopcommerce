export default class BasePage {

    // Common Function to use

    pause = (ms) =>{
        cy.wait(ms)
    }
    logInfo = (message) =>{
        cy.log(message)
    }

     // LKist of Function to set different window size

    setMobileViewPort() {
        cy.viewport('iphone-x')
    }

    setTabletViewPort = () =>{
        cy.viewport('ipad-2')
    }

    setDesktopViewPort = () =>{
        cy.viewport('macbook-16')
    }

    setLargeDesktopViewPort = () =>{
        cy.viewport(2045, 1150)
    }


}