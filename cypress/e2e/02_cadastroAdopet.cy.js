describe('Visitar site Adopet e Cadastrar usuário', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Matheus Victor Costa Nunes');
    cy.get('input[name="email"]').type('matheusv932@gmail.com');
    cy.get('input[name="password"]').type('1234@Teste');
    cy.get('input[name="confirm_password"]').type('1234@Teste');
    cy.contains('button','Cadastrar').click();
  })
})