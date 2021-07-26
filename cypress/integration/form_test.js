describe('Form Sumbissions', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/pizza");
  });
  it("Keep me Sane...Please = sanity check", () => {
    expect(5).to.equal(5);
    expect(1 + 2).to.equal(3);
    expect({}).to.not.equal({}); // can use "equal" here// and not strict i.e. (==)
    expect({}).to.eql({}); //can't use equal here// and deeply strick i.e. (===)
  });


  //checking to see if cypress will work, so far, I'm having uncaught syntax error issues, and it's hard to find. 
  const specialInput = () => cy.get('input[name="special"]');
  const submitBtn = () => cy.get('button[id="order-button"]');
  const checkHawaiian = () => cy.get('input[name="hawaiian"]');
  const checkPepperoni = () => cy.get('input[name="pepperoni"]');
  const checkSausage = () => cy.get('input[name="sausage"]');
  const checkCheese = () => cy.get('input[name="cheese"]');
  const checkHam = () => cy.get('input[name="ham"]');
  const checkVegetarian = () => cy.get('input[name="Vegetarian"]');

  it('test add text to box, select multiple toppings, and submit', () => {
    // - [ ] test that you can add text to the box
    specialInput()
      .should("exist")
      .should('have.value', "")
      .type("Here is some sample text")
      .should("have.value", "Here is some sample text");
    // - [ ] test that you can select multiple toppings
    checkHam().check();
    checkHam().should("be.checked");
    checkHawaiian().check();
    checkHawaiian().should("be.checked");
    checkPepperoni().check();
    checkPepperoni().should("be.checked");
    checkSausage().check();
    checkSausage().should("be.checked");
    checkCheese().check();
    checkCheese().should("be.checked");
    checkVegetarian().check();
    checkVegetarian().should("be.checked");
    // - [ ] test that you can submit the form
    submitBtn().should("not.be.disabled");
    submitBtn().click();

  })

})
