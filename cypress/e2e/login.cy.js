import Login_page from "../support/Pages/Login_page"
import { fa, faker } from "@faker-js/faker"

describe('Login', () => {

    beforeEach('Home', () => {
        cy.visit('/')
    })


    it('Login email vazio', () => {
        Login_page.ClicandoLogin()
        //Login_page.PreencherEmail()
        Login_page.Senha('133')
        Login_page.BotãoLogin()
        Login_page.MensagemErro('E-mail inválido.')


    })
    it('Login com email invalido', () => {
        Login_page.ClicandoLogin()
        Login_page.PreencherEmail('@teste')
        Login_page.Senha('133')
        Login_page.BotãoLogin()
        Login_page.MensagemErro('E-mail inválido.')
    })
    it('Login com senha vazia', () => {
        Login_page.ClicandoLogin()
        Login_page.PreencherEmail(faker.internet.email())
        //Login_page.Senha('133')
        Login_page.BotãoLogin()
        Login_page.MensagemErro('Senha inválida.')
    })
    it('Login com senha invalida', () => {
        Login_page.ClicandoLogin()
        Login_page.PreencherEmail(faker.internet.email())
        Login_page.Senha('1')
        Login_page.BotãoLogin()
        Login_page.MensagemErro('Senha inválida.')
    })

    it('Login clicando apenas no botão', () => {
        Login_page.ClicandoLogin()
        Login_page.BotãoLogin()
        Login_page.MensagemErro('E-mail inválido.')
    })
    it('Login com sucesso', () => {
        Login_page.ClicandoLogin()
        Login_page.PreencherEmail('marta@teste.com')
        Login_page.Senha('123344')
        Login_page.BotãoLogin()
        Login_page.MensagemSucesso('Olá, marta@teste.com')

    })

})