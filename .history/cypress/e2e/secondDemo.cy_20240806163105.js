describe('Template Spec', () => {

  before(() => {
    cy.visit('https://letcode.in/test');
    cy.get(':nth-child(3) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item').click();
    cy.get('#fullName').type('Bene Quayson');
    cy.get('#join').type('Hey Bene, Welcome');
    cy.get('#getMe').type('ortonikc');
    cy.get('#clearMe').clear();
    cy.get('#noEdit').should('be.disabled');
    cy.get('#dontwrite').should('have.attr', 'readonly');
  });
    it('should test the button', () => {
      cy.visit('https://letcode.in/buttons')
      cy.get('#home').click();
      cy.get('.content > .button').click();
      cy.go
    });

    // Add more button tests as needed...
  });


