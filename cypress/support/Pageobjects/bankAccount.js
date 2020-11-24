import { Hands } from "../../robots/ui_robots/BankRobot"
///<reference types="Cypress"/>

 
    const hands = new Hands();
const bankAccountLocator = require('../../fixtures/locators/bank_account_locator.json');
const bankData = require('../../fixtures/data/bankdetails.json')

class BankAccount{
    clickOnBankAccountsTab(){
        hands.clickOnDomElement(bankAccountLocator.bankAccountsTab)
    }
    clickOnNewAccount(){
        hands.clickOnDomElement(bankAccountLocator.newBankAccount)
    }
    typeBankName(){
        hands.typeTextonId(bankAccountLocator.bankName,bankData.bankname);
    }
    typeRoutingNumber(){
        hands.typeTextonId(bankAccountLocator.routingNumber,bankData.routingno)
    }
    typeAccountNumber(){
        hands.typeTextonId(bankAccountLocator.accountNumber,bankData.accountno)
    }
    clickOnSave(){
        hands.clickOnDomElement(bankAccountLocator.saveButton);
    }
}
export default BankAccount;
