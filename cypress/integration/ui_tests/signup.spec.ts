describe ('sign up successfull',function(){
// Valid Sign Up 
it("Sign up successfull", function(){
cy.visit('/')
      cy.get('[data-test=signup]')
      .click()
      cy.get('#firstName')
      .type('Gul')
      cy.get('#lastName')
      .type('S')
      cy.get('#username')
      .type('Gul.S')
      cy.get('#password')
      .type('Gul12')
      cy.get('#confirmPassword')
      .type('Gul12')
      cy.get('.MuiButton-label') .click()
      //.should("have.text", "Login successfull"); 

})
});

// Invalid Password and confirm password
it("Incorrect Password", function(){
    cy.visit('/')
    cy.get('[data-test=signup]')
      .click()
      cy.get('#firstName')
      .type('Gul')
      cy.get('#lastName')
      .type('S')
      cy.get('#username')
      .type('Gul.S')
      cy.get('#password')
      .type('Gul12')
      cy.get('#confirmPassword')
      .type('Gul123')
      .click()
      cy.get('#confirmPassword-helper-text')
      .should("have.text", "Password does not match");
      
})

//Password less than 4 characters
it("Password less than 4", function(){
    cy.visit('/')
    cy.get('[data-test=signup]')
      .click()
      cy.get('#firstName')
      .type('Gul')
      cy.get('#lastName')
      .type('S')
      cy.get('#username')
      .type('Gul.S')
      cy.get('#password')
      .type('Gul')
      .click()
      cy.get('#password-helper-text')
      .should("have.text", "Password must contain at least 4 characters")
     // cy.get('#confirmPassword')
     // .type('Gul')
      //.click()
})
// Blank Username
it("Blank Username field", function(){
    cy.visit('/')
    cy.get('[data-test=signup]')
      .click()
      cy.get('#firstName')
      .type('Gul')
      cy.get('#lastName')
      .type('S')
      cy.get('#username')
      .focus()
      .blur()
      .click()
      cy.get('#username-helper-text')
      .should("have.text", "Username is required")
})

// Blank Password
it("Blank Password field", function(){
    cy.visit('/')
    cy.get('[data-test=signup]')
      .click()
      cy.get('#firstName')
      .type('Gul')
      cy.get('#lastName')
      .type('S')
      cy.get('#username')
      .type('Gul.S')
      cy.get('#password')
      .focus()
      .blur()
      .click()
      cy.get('#password-helper-text')
      .should("have.text", "Enter your password")
})

// All Blank fields
it("All Blank field", function(){
    cy.visit('/')
    cy.get('[data-test=signup]')
      .click()
      cy.get('#firstName')
     .focus()
     .blur()
     .click()
     cy.get('#firstName-helper-text')
     .should("have.text", "First Name is required")
     cy.get('#lastName')
     .focus()
     .blur()
     .click()
     cy.get('#lastName-helper-text')
     .should("have.text", "Last Name is required")
     cy.get('#username')
     .focus()
     .blur()
     .click()
     cy.get('#username-helper-text')
     .should("have.text", "Username is required")
     cy.get('#password')
     .focus()
     .blur()
     .click()
     cy.get('#password-helper-text')
     .should("have.text", "Enter your password")



})