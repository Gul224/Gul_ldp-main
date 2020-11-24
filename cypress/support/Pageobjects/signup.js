import { Eyes, Hands } from "../../robots/ui_robots/AuthRobot"
///<reference types="Cypress"/>


    const hands = new Hands();
    const eyes = new Eyes();

const signupLocator = require('../../fixtures/locators/signup_locator.json');
const userData = require('../../fixtures/data/userdetails.json')

class Signup{
    typeFirstName(){
        hands.typeTextonId(signupLocator.firstName,userData.firstname);
    }
    typeLastName(){
        hands.typeTextonId(signupLocator.lastName,userData.lastname)
    }
    typeUserName(){
        hands.typeTextonId(signupLocator.username,userData.username);
    }
    typePassword(){
        hands.typeTextonId(signupLocator.password,userData.password);
    }
    typeConfirmPassword(){
        hands.typeTextonId(signupLocator.confirmPassword,userData.password);
    }

    clickOnSubmit(){
        hands.clickOnDomElement(signupLocator.signUpButton);
    }

    clearFirstName(){
        hands.clearTextOnDOM("#"+signupLocator.firstName);
    }
    clearLastName(){
        hands.clearTextOnDOM("#"+signupLocator.lastName,)
    }
    clearUserName(){
        hands.clearTextOnDOM("#"+signupLocator.username);
    }
    clearPassword(){
        hands.clearTextOnDOM("#"+signupLocator.password);
    }
    clearConfirmPassword(){
        hands.clearTextOnDOM("#"+signupLocator.confirmPassword);
    }

    seesFirstNameError(){
        eyes.seesTextWithId(signupLocator.firstNameHelperText,signupLocator.firstNameErrorText)
    }
   
    seesLastNameError(){
        eyes.seesTextWithId(signupLocator.lastNameHelperText,signupLocator.lastNameErrorText)
    }
    seesUserNameError(){
        eyes.seesTextWithId(signupLocator.userNameHelperText,signupLocator.usernameErrorText)
    }
    seesPasswordError(){
        eyes.seesTextWithId(signupLocator.passwordHelperText,signupLocator.passwordErrorText)
    }
   
    seesSubmitButtonDisabled(){
        eyes.seesDomDisabled(signupLocator.signUpButton)
    }

    typeMismatchingPasswords(){
        hands.typeTextonId(signupLocator.password,userData.password);
        hands.typeTextonId(signupLocator.confirmPassword,userData.firstname);
    }

    seesPasswordMismatchError(){
        eyes.seesTextWithId(signupLocator.confirmPasswordHelperText,signupLocator.mismatchErrorText)
    }
}
export default Signup;
