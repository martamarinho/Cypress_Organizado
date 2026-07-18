/// < reference types="cypress" />
import {fa, faker}  from "@faker-js/faker"
import Commum_page from "../support/Pages/Commum_page"
import Login_page from "../support/Pages/Login_page"
import Home_page from "../support/Pages/Home_page"
import Cadastro_usuario_page from "../support/Pages/Cadastro_usuario_page"
describe('Cadastro de Usuário',()=>{


beforeEach('acessar Cadastro de usuario',()=>{
Commum_page.AcessandoHome()

})


it('Cadastro com nome vazio',()=>{
Cadastro_usuario_page.ClicarCadastrar()
Cadastro_usuario_page.MensagemErro('O campo nome deve ser prenchido')    
})
it('Cadastro com e-mail vazio',()=>{
    Cadastro_usuario_page.PreencherNome(faker.person.fullName())
    Cadastro_usuario_page.PreencherSenha('123345')
    Cadastro_usuario_page.ClicarCadastrar()
    Cadastro_usuario_page.MensagemErro('O campo e-mail deve ser prenchido corretamente')

    
})
it('Cadastro com e-mail invalido',()=>{
    Cadastro_usuario_page.PreencherNome(faker.person.fullName())
    Cadastro_usuario_page.PreencherSenha('123345')
    Cadastro_usuario_page.PreencherEmail('teste@')
    Cadastro_usuario_page.ClicarCadastrar()
    Cadastro_usuario_page.MensagemErro('O campo e-mail deve ser prenchido corretamente')
    
})
it('Cadastro com senha vazio',()=>{
    Cadastro_usuario_page.PreencherNome(faker.person.fullName())
   Cadastro_usuario_page.PreencherEmail('teste@teste.com')
    // Cadastro_usuario_page.PreencherSenha('123345')
    Cadastro_usuario_page.ClicarCadastrar()
    Cadastro_usuario_page.MensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    
})
it('Cadastro com senha invalido',()=>{
Cadastro_usuario_page.PreencherNome(faker.person.fullName())
   Cadastro_usuario_page.PreencherEmail(faker.internet.email())
     Cadastro_usuario_page.PreencherSenha('15')
    Cadastro_usuario_page.ClicarCadastrar()
    Cadastro_usuario_page.MensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    
})
it('Cadastro com sucesso',()=>{
    const nome = faker.person.fullName()
  Cadastro_usuario_page.PreencherNome(nome)
   Cadastro_usuario_page.PreencherEmail(faker.internet.email())
     Cadastro_usuario_page.PreencherSenha('15jhghu')
    Cadastro_usuario_page.ClicarCadastrar()
    Cadastro_usuario_page.MensagemSucesso('Cadastro realizado!',nome)
    
})
    })
    