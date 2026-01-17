describe('Validando los datos de las mascotas', () => {
    beforeEach(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app');
    });

    it('Validando cada mascota', () => {
        cy.fixture('mascotas.json').then(data => {
            data.forEach(mascota => {
                cy.get(`#pet_${mascota.id}`).click();
                cy.get('h1').should('have.text', mascota.name);
                cy.go('back');
            });
        });
    });
});