

/// < reference types="cypress" />

export default {
AcessandoHome(){
cy.visit('/').get('.mobile-menu-logo')
.should('be.visible')

cy.get('.fa-lock').click()
}
}

