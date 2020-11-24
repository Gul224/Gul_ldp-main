import { Eyes, Hands } from "../../robots/ui_robots/AuthRobot"
///<reference types="Cypress"/>


    const hands = new Hands();
    const eyes = new Eyes();

const profileLocator = require('../../fixtures/locators/profile_locator.json');
const userData = require('../../fixtures/data/userdetails.json')

class Profile{
    typeInvalidEmail(){
        hands.typeTextonId(profileLocator.email,userData.invalidEmail);
    }
    typeValidEmail(){
        hands.typeTextonId(profileLocator.email,userData.email)
    }
    typeInvalidPhoneNumber(){
        hands.typeTextonId(profileLocator.phoneNumber,userData.invalidPhoneNo);
    }
    typeValidPhoneNumber(){
        hands.typeTextonId(profileLocator.phoneNumber,userData.phoneno);
    }

    clickOnSave(){
        hands.clickOnDomElement(profileLocator.saveButton);
    }

    clearEmail(){
        hands.clearTextOnDOM("#"+profileLocator.email);
    }
    clearPhoneNumber(){
        hands.clearTextOnDOM("#"+profileLocator.phoneNumber)
    }

    seeEmailError(){
        eyes.seesTextWithId(profileLocator.emailHelperText,profileLocator.emailErrorText)
    }
   
    seePhoneNumberError(){
        eyes.seesTextWithId(profileLocator.phoneNumberHelperText,profileLocator.phoneNoErrorText)
    }

    seeSaveButtonEnabled(){
        eyes.seesDomEnabled(profileLocator.saveButton)
    }
   
    seeSaveButtonDisabled(){
        eyes.seesDomDisabled(profileLocator.saveButton)
    }
}
export default Profile;
