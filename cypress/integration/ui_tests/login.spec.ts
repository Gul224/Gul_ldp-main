describe ('Clicks on Login', function(){
  // Valid Data
    it("Login Successful", function(){
      cy.visit('/')
        cy.get('#username')
        .type('Gul.S')
        cy.get('#password')  
        .type('Gul12')
        cy.get('.MuiButton-label').click()
    })
});
 // Invalid Username, Valid Password 
it ("invalid Username", function(){
    cy.visit('/')
    cy.get('#username')
    .type('1Gul')
    cy.get('#password')  
    .type('Gul1234')
    cy.get('.MuiButton-label').click()
    cy.getBySel("signin-error")
      .should("be.visible")
      .and("have.text", "Username or password is invalid");
    cy.percySnapshot("Sign In, Invalid Username and Password, Username or Password is Invalid");
  })

  // Valid Username, INvalid Password 
  it ("invalid Password", function(){
    cy.visit('/')
    cy.get('#username')
    .type('Gul')
    cy.get('#password')  
    .type('Gul123')
    cy.get('.MuiButton-label').click()
    cy.getBySel("signin-error")
      .should("be.visible")
      .and("have.text", "Username or password is invalid");
    cy.percySnapshot("Sign In, Invalid Username and Password, Username or Password is Invalid");
  })

  // Invalid Username/Password
  it ("invalid login", function(){
    cy.visit('/')
    cy.get('#username')
    .type('Gul1222')
    cy.get('#password')  
   .type('Gul121113')
    cy.get('.MuiButton-label').click()
    cy.getBySel("signin-error")
      .should("be.visible")
      .and("have.text", "Username or password is invalid");
    cy.percySnapshot("Sign In, Invalid Username and Password, Username or Password is Invalid");
  })


  // Login with one blank field 
  it ("login with one blank field ", function(){
    cy.visit('/')
    cy.get('#username')
    .focus()
     .blur()
     .click()
     cy.get('#username-helper-text')
     .should("have.text", "Username is required")
    cy.get('#password')  
    .type('Gul1')
    
  })

// Login with blank fields
it ("Blank fields ", function(){
  cy.visit('/')
    cy.get('#username')
    .focus()
     .blur()
    .click
    cy.get('#username-helper-text')
    .should("have.text", "Username is required")
    cy.get('#password')  
    .focus()
     .blur()
    .click

 })


  // Login with less then 4 letter password 
  it ("Password less then 4 Char", function(){
    cy.visit('/')
    cy.get('#username')
    .type('Gul.S')
    cy.get('#password') 
    .type('Gul')
    .click()
    cy.get('#password-helper-text')
    .should("have.text", "Password must contain at least 4 characters");
     // .and("have.text","Password must contain at least 4 characters" );
  //  cy.percySnapshot("Sign In, Password must contain at least 4 characters");

    
  })