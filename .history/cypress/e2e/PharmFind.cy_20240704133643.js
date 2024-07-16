describe('template spec', () =>{

    beforeEach(() =>{
        cy.visit('https://pharma-find.amalitech-dev.net/user/signup');
    });
    
    it('should display the registration page', () => {


    }) ;
    
    it('should allow user to register', () => {
        cy.get('input["Full Name"]').ty

    })
})