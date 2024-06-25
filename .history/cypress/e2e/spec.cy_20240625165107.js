describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://practice-automation.com/')
    cy.get('.wp-container-core-buttons-is-layout-8 > .wp-block-button > .wp-block-button__link').click();
    cy.get('[data-cy="name"]').type("emma");
    cy.get('[for="drink1"]').click();
    cy.get('[for="color2"]').type("Blue");
    cy.get('[data-cy="siblings"]').select("Yes");
    cy.get('[data-cy="email"]').type("harriet@.gmail.com");
    

    

    
  })
})