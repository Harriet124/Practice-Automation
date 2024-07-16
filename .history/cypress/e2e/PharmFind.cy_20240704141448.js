describe('template spec', () =>{

    beforeEach(() =>{
        cy.visit('https://pharma-find.amalitech-dev.net/user/signup');
    });
    
    it('should display the registration page', () => {


    }) ;
    
    it('should allow user to register', () => {
        cy.get('input[name="Full Name"]').type('Harriet Arko')
        cy.get('input[name="Email"]').type('jecaref672@devncie.com')

    });
    it('navigate', () => {
        cy.get('input[name="Phone Number"]').type('0534535678')
        cy.get('input[name="Digital Address"]').type('GE-221-2345')
    });
})