describe ('template spec', () =>{

   beforeEach(() => {
      cy.visit('https://practice-automation.com/');
   })

it('javascript executor', () =>{
   cy.get('.wp-container-core-buttons-is-layout-1 > .wp-block-button > .wp-block-button__link').click();
   cy.get('#start').click();
   

   // cy.get('#g1065-selectorenteradate').click();

})










})