class FooterPage{

    element ={

        chairs :()=> cy.get('.caps').contains('Chairs')

    }


}

module.exports =  new FooterPage();