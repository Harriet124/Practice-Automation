describe ('template spec', () =>{
  before(())
    it ('passes', () =>{
      cy.visit('https://letcode.in/test')
      cy.get(':nth-child(3) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item').click(); 
      cy.get('#fullName').type('Bene Quayson');
      cy.get('#join').type('Hey Bene, Welcome')
      cy.get('#getMe').type('ortonikc')
      cy.get('#clearMe').clear();
      cy.get('#noEdit').should('be.disabled');
      cy.get('#dontwrite').should('have.attr', 'readonly');



    })
})