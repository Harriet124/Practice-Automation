describe("Template Spec", () => {
  beforeEach(() => {
    cy.visit("https://letcode.in/test");
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

  it.only("should test the button", () => {
    cy.xpath("//a[normalize-space()='Click']")

    cy.get("#home").click();
    cy.get(".content > .button").click();

    cy.go("back").go("back");
  });

  it("should test the select functionality", () => {
    cy.visit("https://letcode.in/dropdowns");
    cy.get("#fruits").select("Mango");
    cy.get("#superheros").select("Ghost Rider");
    cy.get("#lang").select("Java");
    cy.get("#country").select("Colombia");
  });

  it.only("should test the alert functionality"), () =>{
       cy.get("#accept").click();
        cy.get("#confirm").click();
        cy.visit("https://letcode.in/alert");
        cy.window().then((win) => {
          cy.stub(win, "prompt").returns("Chris");
          cy.get("#prompt").click();
          cy.get(".notification.is-info").should("have.text", "Your name is: Ama");
        });
      }
  });

  // cy.get('#modern').click();

// });
