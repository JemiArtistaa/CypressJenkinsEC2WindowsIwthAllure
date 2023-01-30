/// <reference types="cypress"/>

import HeaderPage from '../pages/HeaderPage.js'

Cypress.Commands.add('clickButton',(buttonName)=>{
    cy.get('button').contains(buttonName).click({force:true}).wait(2000)
})

Cypress.Commands.add('loginToOrangeHrm',(uName, pWord, LoginButtonText)=>{

        cy.get('input[name="username"]').type(uName)
        cy.get('input[name="password"]').type(pWord)
        cy.clickButton(LoginButtonText)
        cy.url().should('contain','dashboard')

})

Cypress.Commands.add('clickMenuItem',(menuName)=>{

    cy.get('ul.oxd-main-menu').contains(menuName).click()

})

Cypress.Commands.add('selectEmployee',(searchText,chosenEmployee)=>{

    cy.get('input[placeholder="Type for hints..."]').type(searchText).wait(2000).then(()=>{
        cy.contains(chosenEmployee).click()
    })

})

Cypress.Commands.add('selectJobTitle',(jobTitle)=>{

    cy.get('[class="oxd-grid-3"]>div:nth-child(2) [class="oxd-select-wrapper"]').click().wait(500).then(()=>{
        cy.contains(jobTitle).click()
    })

})

Cypress.Commands.add('selectLocation',(loc)=>{
    cy.get('[class="oxd-grid-3"]>div:nth-child(3) [class="oxd-select-wrapper"]').click().wait(500).then(()=>{
        cy.contains(loc).click()
    })

})

Cypress.Commands.add('verifyName',(searchedText)=>{

    cy.get('.orangehrm-directory-card-header').each(($name)=>{
        expect($name.text()).to.contain(searchedText)
    })

})

Cypress.Commands.add('verifyJobtitle',(title)=>{
    
    cy.get('.orangehrm-directory-card-subtitle').each(($title)=>{
        expect($title.text()).to.contain(title)
    })
})

Cypress.Commands.add('verifyLocation',(loc)=>{

    cy.get('p:nth-child(2).orangehrm-directory-card-description').each(($loc)=>{
        expect($loc.text()).to.contain(loc)
    })
    
})

Cypress.Commands.add('addProductTocart',(nameOfproduct)=>{

    HeaderPage.element.chairs().click()
    cy.get('.products .product-card-container').as ('products')
    cy.get('@products').find('.description >div:nth-child(1)').as ('productname')

    cy.get('@productname').each(($productName,index)=>{

        if($productName.text().includes(nameOfproduct))
            cy.get('@products').find('>div:nth-child(1)').eq(index).click()
            
    })
    cy.get('div.purchase-button').click()

})

Cypress.Commands.add('verifyCartAdded',()=>{

    cy.get('.cart').should('include.text','(1)')
})

Cypress.Commands.add('verifyTitleInCart',((nameOfProduct)=>{
    
    cy.get('.cart').click().wait(500)
    cy.get('.cart .product-description > div:nth-child(1)').should('contain.text',nameOfProduct)
})
)