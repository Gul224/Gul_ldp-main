describe('Make Payment', function(){
    //Request a payment with Valid data
    it("Request a Payment", function(){
        cy.visit('/')
        cy.get('#username')
        .type('Gul.S')
        cy.get('#password')  
        .type('Gul12')
        cy.get('.MuiButton-label').click()
        cy.get('.MuiButton-label > .MuiSvgIcon-root').click()
        cy.get('[data-test=user-list-item-t45AiwidW]').click()
        cy.get('#amount')
        .type('1000')
        cy.get('#transaction-create-description-input')
        .type('Miscellaneous')
        cy.get('[data-test=transaction-create-submit-request] > .MuiButton-label').click()

    })
});
// Make Payment with Valid data
it("Request a Payment", function(){
    cy.visit('/')
    cy.get('#username')
    .type('Gul.S')
    cy.get('#password')  
    .type('Gul12')
    cy.get('.MuiButton-label').click()
    cy.get('.MuiButton-label > .MuiSvgIcon-root').click()
    cy.get('[data-test=user-list-item-bDjUb4ir5O]').click()
    cy.get('#amount')
    .type('2000')
    cy.get('#transaction-create-description-input')
    .type('Payment for school')
    cy.get('[data-test=transaction-create-submit-payment]').click()
})
//Blank Amount
it("Blank Amount", function(){
    cy.visit('/')
    cy.get('#username')
    .type('Gul.S')
    cy.get('#password')  
    .type('Gul12')
    cy.get('.MuiButton-label').click()
    cy.get('.MuiButton-label > .MuiSvgIcon-root').click()
    cy.get('[data-test=user-list-item-bDjUb4ir5O]').click()
    cy.get('#amount')
    .focus()
    .blur()
    .click()
    
})
//Blank Add Note field
it("Blank note field", function(){
    cy.visit('/')
    cy.get('#username')
    .type('Gul.S')
    cy.get('#password')  
    .type('Gul12')
    cy.get('.MuiButton-label').click()
    cy.get('.MuiButton-label > .MuiSvgIcon-root').click()
    cy.get('[data-test=user-list-item-tsHF6_D5oQ]').click()
    cy.get('#amount')
    .type('2000')
    cy.get('#transaction-create-description-input')
    .focus()
    .blur()
    .click()

})
// All fields blank
it("All Blank fields", function(){
    cy.visit('/')
    cy.get('#username')
    .type('Gul.S')
    cy.get('#password')  
    .type('Gul12')
    cy.get('.MuiButton-label').click()
    cy.get('.MuiButton-label > .MuiSvgIcon-root').click()
    cy.get('[data-test=user-list-item-bDjUb4ir5O]').click()
    cy.get('#amount')
    .focus()
    .blur()
    .click()
    cy.get('#transaction-create-description-input')
    .focus()
    .blur()
    .click()
})