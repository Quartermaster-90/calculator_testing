describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
  })

  it('should update the display with the result of the operation', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12')
  })

  it('should update the display with the result of the chain operations', () => {
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')
  })

  it('should update the output as expected for positive numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('should update the output as expected for negative numbers', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should update the output as expected for decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.5')
  })

  it('should update the output as expected for very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '912468')
  })

  it('should display zero if you divide by zero', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })

})