describe('template spec', () =>{
    beforeEach('should display the registration page', () => {
        cy.visit('https://pharma-find.amalitech-dev.net/user/signup');
        cy.url().should('include', '/signup')
    });
    
    it('should allow user to register', () => {
        cy.get("input[id='0.35711457552065373']").ty
        cy.get('input[name="Email"]').type('jecaref672@devncie.com').click(); 
        cy.click('button[type="submit"]').click();


    });
    it('should navigate and fill additional fields', () => {
        cy.get('input[name="Phone Number"]').type('0534535678')
        cy.get('input[name="Digital Address"]').type('GE-221-2345').click();
        cy.get('button[type="submit"]').click();
    });
})