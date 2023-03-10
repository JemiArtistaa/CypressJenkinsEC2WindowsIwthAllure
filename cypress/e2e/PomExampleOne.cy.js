/// <reference types="cypress"/>

// import HeaderPage from '../Pages/FooterPage'
// import FooterPage from '../Pages/FooterPage'
const HeaderPage = require('../Pages/HeaderPage')
const FooterPage = require('../Pages/FooterPage')


describe('verify shopist domain',()=>{

    beforeEach(()=>{
        cy.viewport (1366,768)
    })

    it('title check,<regression><smoke>',()=>{
        
        cy.visit('https://shopist.io/')
        HeaderPage.element.chairs().click().wait(1000)

        cy.get('.products .product-card-container').as ('products')
        cy.get('@products').find('.description >div:nth-child(1)').as ('productname')

        cy.get('@productname').each(($productName,index)=>{

            if($productName.text().includes('Wooden Stools'))
                cy.get('@products').find('>div:nth-child(1)').eq(index).click()
                
        })
        cy.url().should('contain','/product/')

    })

    it('Verify add to cart functionality one,<regression><sanity>',()=>{
        
        cy.visit('https://shopist.io/')
        cy.addProductTocart('Wooden Stools').wait(500)
        cy.verifyCartAdded()
    })

    it('verify Cart functionality two,<regression><smoke>',()=>{

        cy.visit('https://shopist.io/')
        cy.addProductTocart('Wooden Stools')
        cy.verifyCartAdded()
        cy.verifyTitleInCart('Wooden Stools')

    })

    it('verify cart functionality three,<regression><sanity>',()=>{

        cy.visit('https://shopist.io')
        FooterPage.element.chairs().click()
        cy.url().should('include','/chairs')
    })

})