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
    cy.xpath("//iframe[@id='firstFr']").type("Benedicta Djangmah");
    cy.xpath("//iframe[@id='firstFr']").type("bene@gmail.com");
  });

  it("should test the radio functionality", () => {
    cy.xpath("//a[normalize-space()='Toggle']").click(); 
    cy.get('#yes').check();
    cy.get('#yes').should("be.checked");
    cy.get('#one').check();
    cy.get('#one').should("be.checked");
    cy.get('#bug').check();
    cy.get('#bug').should("be.checked");
    cy.get('#maybe').should("be.disabled");
    cy.xpath("//div[7]//label[2]//input[1]").check();
    cy.xpath("//div[7]//label[2]//input[1]").should("be.checked");
  });
  it("should test the elements functionality", () =>{
    cy.xpath("//a[normalize-space()='Find Elements']").click();
    cy.get("input[placeholder='Enter your git user name eg., ortonikc']").type("harry124")
    cy.get("#search").click();
  });
  it("be dragged within the dotted container", () =>{
    cy.xpath("//a[normalize-space()='AUI - 1']").click();
    cy.get("#sample-box")
  })
});
