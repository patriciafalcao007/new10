describe ("Test for New10", () => {
it ("Opens GitHub login page", () => { 
    cy.visit("https://github.com/login");
    cy.get("h1")
    .should("have.text","Sign in to GitHub");
});

it ("Login to Github", () => { 
cy.get('input[name="login"]').type('patriciafalcao007@icloud.com')
.get('input[name="password"] ').type('falcaopatricia1')
.get('input[type="submit"]').click()
// .get('.user-nav').should('be.visible')
});

it ("Create a repo", () => { 
    cy.visit("https://github.com/new")
    .get('input[name="repository[name]"] ').type('repo-for-delete')
    .get('input[name="repository[description]"] ').type('Delete the repo')
    .get('input[type="submit"]').click()
    .get("h1.public")
    .should("have.text","repo-for-delete");
    
});

it ("Delete the repo", () => { 
    cy.visit("https://github.com/patriciafalcao007/repo-for-delete/settings")
    .get('form').find('button').contains('Delete this repository').click()
    .get('input[name="verify"] ').type('repo-for-delete')
    .get('button.btn-danger').click()
    .get(".container")
    .should("have.text","Your repository \"repo-for-delete\" was successfully deleted.");
}); 
}); 