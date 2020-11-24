import { Eyes, Hands } from "../../robots/ui_robots/AuthRobot"
///<reference types="Cypress"/>


    const hands = new Hands();
    const eyes = new Eyes();

const homeLocator = require('../../fixtures/locators/home_locator.json');

class Home{
    clickOnMyAccount(){
        hands.clickOnDomElement(homeLocator.myAccount)
    }
  
}
export default Home;
