/// <regerence types="cypress"/>

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
         cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
         cy.get('#username').type('levi.barros@teste.com.br')
         cy.get('#password').type('Teste@123')
         cy.get('.woocommerce-form > .button').click()

         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, levi.barros (não é levi.barros? Sair)')


    })


})