describe ('template spec', () =>{
    it ('passes', () =>{
      cy.visit('https://letcode.in/test')
      cy.get(':nth-child(3) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item').click(); 
      cy.get('#fullName').type('Bene Quayson');
      cy.get('#join').type('Hey Bene, Welcome')
      cy.get('#getMe').type('ortonikc')
      


    })
})