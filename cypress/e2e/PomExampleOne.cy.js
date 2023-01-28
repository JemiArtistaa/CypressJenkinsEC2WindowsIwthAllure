/// <reference types="cypress"/>

import HeaderPage from '../Pages/HeaderPage'
import FooterPage from '../Pages/FooterPage'

describe('',()=>{

    beforeEach(()=>{
        cy.viewport (1366,768)
    })

    it('test one',()=>{
        
        cy.visit('https://shopist.io/')
        HeaderPage.element.chairs().click().wait(200)

        cy.get('.products .product-card-container').as ('products')
        cy.get('@products').find('.description >div:nth-child(1)').as ('productname')

        cy.get('@productname').each(($productName,index)=>{

            if($productName.text().includes('Wooden Stools'))
                cy.get('@products').find('>div:nth-child(1)').eq(index).click()
                
        })
        cy.url().should('contain','/product/')

    })

    it('Verify add to cart functionality',()=>{
        
        cy.visit('https://shopist.io/')
        cy.addProductTocart('Wooden Stools').wait(500)
        cy.verifyCartAdded()
    })

    it.only('verify Cart functionality',()=>{


        cy.visit('https://shopist.io/')
        cy.addProductTocart('Wooden Stools')
        cy.verifyCartAdded()
        cy.verifyTitleInCart('Wooden Stools')

    })

    it('test Three',()=>{

        cy.visit('https://shopist.io')
        FooterPage.elements.chairs().click()
        cy.url().should('include','/chairs')
    })

})