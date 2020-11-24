import { Eyes, Hands, Dependencies } from "../../robots/ui_robots/AuthRobot"
///<reference types="Cypress"/>

    const eyes = new Eyes();
    const hands = new Hands();
const loginLocator = require('../../fixtures/locators/login_locators.json');
const userData = require('../../fixtures/data/userdetails.json')

class Login{
    typeUserName(){
        hands.typeTextonId(loginLocator.username,userData.username);
    }
    typePassword(){
        hands.typeTextonId(loginLocator.password,userData.password);
    }
    clickOnSubmit(){
        hands.clickOnDomElement(loginLocator.signInButton);
    }
    clickOnSignUp(){
        hands.clickOnText(loginLocator.signUpText);
    }
}
export default Login;
