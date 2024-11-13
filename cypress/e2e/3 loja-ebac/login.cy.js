/// <regerence types="cypress"/>



describe('Funcionalidade: Login', () => {

beforeEach(() => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    
});

afterEach(() => {
    cy.screenshot()
});
    
    it('Deve fazer login com sucesso', () => {         
         cy.get('#username').type('levi.barros@teste.com.br')
         cy.get('#password').type('Teste@123')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, levi.barros (não é levi.barros? Sair)')

    })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {        
        cy.get('#username').type('levi@teste.com.br')
        cy.get('#password').type('Teste@123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário' )
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserie senha inválida', () => {
        cy.get('#username').type('levi.barros@teste.com.br')
        cy.get('#password').type('Teste@000')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail levi.barros@teste.com.br está incorreta.' )
        cy.get('.woocommerce-error').should('exist')



    });


})