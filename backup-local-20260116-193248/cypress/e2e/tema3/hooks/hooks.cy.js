describe('Validacion de mascotas', () => {
    before(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app');
        cy.get('[data-cy="link_login"]').click();
        cy.get('#email').type('user1@examle.com');
        cy.get('#password').type('password123');
        cy.get('[data-cy="login_btn"]').click();
    });
    beforeEach(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app');
    });
    it('Validar que esté Buddy', () => {
        cy.get('#pet_1').click();
        cy.get('h1').should('have.text', 'Buddy');
    });

    it('Validar que esté Max', () => {
        cy.get('#pet_3').click();
        cy.get('h1').should('have.text', 'Max');
    });

    it('Validar que esté Luna', () => {
        cy.get('#pet_2').click();
        cy.get('h1').should('have.text', 'Luna');
    });

    afterEach(() => {
        cy.screenshot();
    });

    after(() => {
        cy.clearLocalStorage();
    });

});