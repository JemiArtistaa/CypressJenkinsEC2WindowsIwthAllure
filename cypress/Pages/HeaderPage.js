class HeaderPage{

    element = {
        chairs : () => cy.get('.chairs'),
        sofas : () => cy.get('.sofas'),
        bedding : () => cy.get('.bedding'),
        lighting : () => cy.get('.lighting'),
        profile : () => cy.get('.navbar-section .profile'),
        cart : () => cy.get('.cart')
    }
}

module.exports = new HeaderPage();