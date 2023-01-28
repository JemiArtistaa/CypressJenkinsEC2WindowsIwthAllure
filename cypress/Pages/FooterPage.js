class FooterPage{

    elements ={

        chairs :()=> cy.get('.caps').contains('Chairs')

    }


}

module.exports = new FooterPage();