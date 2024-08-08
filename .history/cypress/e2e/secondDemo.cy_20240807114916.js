describe('Template Spec', () => {

  before(() => {
    // Runs once before all tests in the block
    cy.visit('https://letcode.in/test');
  });

  beforeEach(() => {
    // Runs before each test in the block
    // Visit the initial test page
    cy.visit('https://letcode.in/test');
    
    // Set up the state needed for each test
    cy.get(':nth-child(3) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item').click();
    cy.get('#fullName').type('Bene Quayson');
    cy.get('#join').type('Hey Bene, Welcome');
    cy.get('#getMe').type('ortonikc');
    cy.get('#clearMe').clear();
    cy.get('#noEdit').should('be.disabled');
    cy.get('#dontwrite').should('have.attr', 'readonly');
  });

  it('should test the button', () => {
    // Visit the buttons page
    cy.visit('https://letcode.in/buttons');
    
    // Test button functionality
    cy.get('#home').click();
    cy.get('.content > .button').click();
    
    // Go back twice
    cy.go('back').go('back');
  });

  it('should test the select functionality', () => {
    // Visit the dropdowns page
    cy.visit('https://letcode.in/dropdowns');
    cy.get('#fruits').select('Mango';
    
  });

});
