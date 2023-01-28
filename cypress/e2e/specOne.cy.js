/// <reference types="cypress"/>

describe('template spec', () => {


  let userName = 'Admin'
  let passWord = "admin123"
  let buttonName ='Login'
  beforeEach(()=>{
    cy.session([userName,passWord,buttonName],()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.loginToOrangeHrm(userName,passWord,buttonName)
    })
  })


  it('Search By Name <smoke>',()=>{

    let search = 'Odis'
    let selectedEmp = 'Adalwin'
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.clickMenuItem('Directory')
    cy.selectEmployee(search,selectedEmp)
    cy.clickButton('Search')
    cy.verifyName(search)

  })

  it('Search By Job-title <sanity>',()=>{

    let jobTitle = 'Software Engineer'

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.clickMenuItem('Directory')
    cy.selectJobTitle(jobTitle)
    cy.clickButton('Search')
    cy.verifyJobtitle(jobTitle)

  })

  it('Search By Location <regression>',()=>{

    let location = 'Texas'

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.clickMenuItem('Directory')
    cy.selectLocation(location)
    cy.clickButton('Search')
    cy.verifyLocation(location)

  })

})

// cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')