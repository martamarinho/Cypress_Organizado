export default {
    ClicarCadastrar() {

        cy.get('#btnRegister').click()
    },


//Forma de validar com espera de Element 
    //MensagemErro(){
    // cy.get('.errorLabel')
    // .should('be.visible')
    //.then((Element)=> {
    //  expect(Element).to.be.visible
    //  expect(Element.text()).equal('O campo nome deve ser prenchido')
    //})

    MensagemErro(mensagem) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    PreencherNome(nome){
cy.get('#user').type(nome)
    },

    PreencherSenha(senha){
        cy.get('#password').type(senha)
    },
    PreencherEmail(email){
        cy.get('#email').type(email)
    },
    MensagemSucesso(mensagem,nome){
        cy.get('#swal2-title').should('have.text', mensagem)
        cy.get('#swal2-html-container').should('have.text',`Bem-vindo ${nome}`)

    }
}
