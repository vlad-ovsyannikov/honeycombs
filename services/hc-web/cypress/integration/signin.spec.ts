/// <reference types="cypress" />

context('Signin feature', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin')
    });

    it('should diplay Signin form', function () {
        cy.get('#signin-form').should('be.visible');
    });

    it('should redirect to dashboard with correct credentials', function () {
        cy.get('#form-email').type('demo@demo.com');
        cy.get('#form-password').type('demoPassword456');
        cy.get('#form-submit').click();
        cy.location('pathname').should('include', 'dashboard')

    });

    it('should throw arrow with wrong credentials', function () {
        cy.get('#form-email').type('fake@email.com');
        cy.get('#form-password').type('password');
        cy.get('#form-submit').click();
        cy.get('#form-validation-message').should('be.visible');
    });
})


