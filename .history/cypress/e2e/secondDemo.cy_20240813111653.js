describe("Template Spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should set up the input fields and validate their state", () => {
    cy.xpath("//a[normalize-space()='Edit']").click();
    cy.get("#fullName").type("Bene Quayson");
    cy.get("#join").type("Hey Bene, Welcome");
    cy.get("#getMe").type("ortonikc");
    cy.get("#clearMe").clear();
    cy.get("#noEdit").should("be.disabled");
    cy.get("#dontwrite").should("have.attr", "readonly");
  });

  it("should test the button", () => {
    cy.xpath("//a[normalize-space()='Click']").click();
    cy.get("#home").click();
    cy.get(".content > .button").click();
    cy.go("back").go("back");
  });

  it("should test the select functionality", () => {
    cy.xpath("//a[normalize-space()='Drop-Down']").click();
    cy.get("#fruits").select("Mango");
    cy.get("#superheros").select("Ghost Rider");
    cy.get("#lang").select("Java");
    cy.get("#country").select("Colombia");
  });

  it("should test the alert functionality", () => {
    cy.xpath("//a[normalize-space()='Dialog']").click();
    cy.get("#accept").click();
    cy.get("#confirm").click();
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Chris");
    });
    cy.get("#prompt").click();
    cy.get(".notification.is-info").should("have.text", "Your name is: Chris");
    cy.get("#modern").click();
  });
  it("should test the frame functionality", () => {
    cy.xpath("//a[normalize-space()='Inner HTML']").click();
    cy.xpath("")
    cy.get("input[placeholder='Enter email']").type("bene@gmail.com");
    
  });
});
