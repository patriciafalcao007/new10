describe ("Login test 1 for New10", () => {
    it ("Opens GitHub login page", () => { 
        cy.visit("https://github.com/login")
          .get("h1")
          .should("have.text","Sign in to GitHub");
    });
    
    it ("Login to Github", () => { 
        cy.get('input[name="login"]').type('patriciafalcao007@icloud.com')
          .get('input[name="password"] ').type('falcaopatricia1')
          .get('input[type="submit"]').click()
          cy.wait(2000)
          .get('.user-nav').should('be.visible');
    });
    }); 
