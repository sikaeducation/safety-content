describe('Page content', () => {
  it('shows correct content', () => {
    cy.visit('/');
    cy.get('header img').should('have.attr', 'src', './images/phptravels-logo.png');
    cy.get('h2').should('have.text', 'Application Test Drive.');

    cy.get('body > header nav > ul > li').as('listItems');
    cy
      .get('@listItems')
      .eq(0)
      .find('a')
      .should('have.text', 'Demo');
    cy
      .get('@listItems')
      .eq(1)
      .find('a')
      .should('have.text', 'Order');
    cy
      .get('@listItems')
      .eq(2)
      .find('a')
      .contains('Product')
      .should('have.text', 'Product');

    cy.get("nav > button").click();

    cy
      .get('@listItems')
      .eq(2)
      .find('ul > li')
      .as('dropDown');
    cy
      .get('@dropDown')
      .eq(1)
      .should('have.text', 'Documentation');
    cy
      .get('@dropDown')
      .eq(2)
      .should('have.text', 'Features');
    cy
      .get('@dropDown')
      .eq(3)
      .should('have.text', 'Technology');

    cy
      .get('body > section')
      .eq(2)
      .find('h4')
      .should('have.length', 6);

    cy
      .get('a')
      .contains('Order')
      .click();
    cy.url().should('be', '/order');
  });
});
