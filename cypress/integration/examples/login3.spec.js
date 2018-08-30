describe('Login', () => {
    it('should be publicly accessible', () => {
    cy.visit("http://the-internet.herokuapp.com/login")

      // snapshot name will be the test title
      cy.matchImageSnapshot();
  
      // snapshot name will be the name passed in
      cy.matchImageSnapshot('login');
  
      // options object passed in
      cy.matchImageSnapshot();
  
      // match element snapshot
      cy.get('#username').matchImageSnapshot();
    });
  });