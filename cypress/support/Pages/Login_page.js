export default {
    PreencherEmail(email){
        cy.get('#user').type(email)

    },

    ClicandoLogin(){
        cy.get('.fa-user').click()
        .get('#login_area').should('be.visible')
    },

    Senha(senha){
        cy.get('#password').type(senha)
    },

    BotãoLogin(){
        cy.get('#btnLogin').click()
    },

    MensagemErro(mensagem){
        cy.get('.invalid_input').should('have.text', mensagem)

    },
    MensagemSucesso(mensagem){
        cy.get('#swal2-title').should('be.visible')
        cy.get('#swal2-html-container').should('have.text',mensagem)
    }
    
}