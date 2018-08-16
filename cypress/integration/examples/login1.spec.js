describe ("Login test 1 for New10", () => {
    it ("Opens The Internet login page", () => { 
        cy.visit("http://the-internet.herokuapp.com/login")
          .get("h2")
          .should("have.text","Login Page");
    });
    
    it ("Login to The Internet", () => { 
        cy.get('input[name="username"]').type('tomsmith')
          .get('input[name="password"] ').type('SuperSecretPassword')
          .get('button[type="submit"]').click()
          .wait(2000)
          .get("#flash")
          .contains("Your password is invalid!")
          .get('input[name="username"]').type('tomsmith')
          .get('input[name="password"] ').type('SuperSecretPassword!')
          .get('button[type="submit"]').click()
          .wait(2000)
          .get("#flash")
          .contains("You logged into a secure area!")
          .get("h4.subheader")
          .should("contain.text","Welcome to the Secure Area. When you are done click logout below.");
    });
    }); 