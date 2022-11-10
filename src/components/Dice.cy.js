import Dice from "./Dice.vue";

describe("<Dice />", () => {
  it("renders", () => {
    cy.mount(Dice);
  });
  it("Random Beer", () => {
    cy.get("#button").click();
    cy.get("#rolledNumber").should((response) => {
      console.log(response);
    });

    // cy.get("@randomBeerTest").should((response) => {
    //   console.log(response);
    //   expect(response.body[0]).to.have.property("id");
    //   expect(response.body[0]).to.have.property("name");
    //   expect(response.body[0]).to.have.property("method");
    //   expect(response.body[0]).to.have.property("first_brewed");
    //   expect(response.body[0]).to.have.property("description");
    // });
  });
});
