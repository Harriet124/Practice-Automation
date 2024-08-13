describe("Template Spec", () => {
  beforeEach(() => {
    cy.visit("https://letcode.in/test");
  });

  it("should set up the input fields and validate their state", () => { 
    cy.get(":nth-child(3) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item").click(); 
    cy.get("#fullName").type("Bene Quayson"); 
    cy.get("#join").type("Hey Bene, Welcome"); 
    cy.get("#getMe").type("ortonikc"); 
    cy.get("#clearMe").clear(); 
    cy.get("#noEdit").should("be.disabled"); 
    cy.get("#dontwrite").should("have.attr", "readonly"); });


  it("should test the button", () => {
    // Visit the buttons page
    cy.visit("https://letcode.in/buttons");
    
    cy.get("#home").click();
    cy.get(".content > .button").click();
    
    cy.go("back").go("back");
  });

  it("should test the select functionality", () => {
    // Visit the dropdowns page
    cy.visit("https://letcode.in/dropdowns");
    cy.get("#fruits").select("Mango");
    cy.get("#superheros").select("Ghost Rider");
    cy.get("#lang").select("Java");
    cy.get("#country").select("Colombia");
  });

  after(() => {
    it("should test the alert functionality")

    cy.visit("https://letcode.in/alert");
    cy.get('#accept').click();
    cy.visit("https://letcode.in/alert");
    cy.get('#confirm').click();
    cy.visit("https://letcode.in/alert");
    cy.get('#prompt').click();
    cy.on('window:prompt', (text) =>{
      expect()
    })

    // cy.get('#modern').click();
    


    
  });
});
