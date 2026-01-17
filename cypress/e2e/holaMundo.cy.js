describe('Validación de contenidos del site', ()=>{
    it('Debería tener el texto "Santiago"', ()=>{
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.contains('Santiago').should('exist');
        cy.contains('Buenos Aires').should('not.exist');
    });
});