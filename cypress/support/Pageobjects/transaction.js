import { Hands } from "../../robots/ui_robots/BankRobot"
///<reference types="Cypress"/>

 
const hands = new Hands();
const transactionLocator = require('../../fixtures/locators/transaction_locator.json');
const transactionData = require('../../fixtures/data/transactiondetails.json')

class Transaction{
    clickOnNewTransaction(){
        hands.clickOnDomElement(transactionLocator.newTransaction)
    }
    selectFriend(){
        hands.clickOnDomElement(transactionLocator.friendIcon)
    }
    typeAmount(){
        hands.typeTextonId(transactionLocator.amount,transactionData.amount)
    }
    typeDescription(){
        hands.typeTextonId(transactionLocator.description,transactionData.description);
    }
    clickOnSave(){
        hands.clickOnDomElement(transactionLocator.saveButton);
    }
}
export default Transaction;
