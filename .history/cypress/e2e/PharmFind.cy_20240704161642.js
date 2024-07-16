describe('template spec', () =>{
    beforeEach('should display the registration page', () => {
        cy.visit('https://pharma-find.amalitech-dev.net/user/signup');
        cy.url().should('include', '/signup')
    });
    
    it('should allow user to register', () => {
        cy.xpath('//input[@placeholder="Enter full name"]').type("Harriet Arko");
        cy.xpath('//input[@placeholder="Enter your Email Address"]').type('jecaref672@devncie.com'); 
        cy.xpath('//div[text()="Next"]').click();

        cy.xpath('//input[@aria-label="Phone Number"]').type('0534535678');
        cy.xpath('//button[@aria-label="Next"]').click
        // cy.xpath('//input[@id="0.9840963825064195"]').type('GE-221-2345');
        // cy.xpath('//button[@aria-label="Previous"]').click();
        // cy.xpath('//input[@id="0.44295709436916164"]').type('@passwordA1').click();
    });

    // it('should navigate and fill additional fields', () => {
    //     cy.xpath('//input[@placeholder="Enter your Email Address"]').type('0534535678')
    //     cy.get('input[name="Digital Address"]').type('GE-221-2345').click();
    //     cy.get('button[type="submit"]').click();
    // });
})