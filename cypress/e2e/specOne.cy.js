/// <reference types="cypress"/>

describe('verify oraange domian', () => {


  let userName = 'Admin'
  let passWord = "admin123"
  let buttonName ='Login'
  
  beforeEach(()=>{
    cy.session([userName,passWord,buttonName],()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.loginToOrangeHrm(userName,passWord,buttonName)
    })
  })


  it('Search By Name <regression><smoke>',()=>{

    let search = 'odis'
    let selectedEmp = 'Adalwin'
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.clickMenuItem('Directory')
    cy.selectEmployee(search,selectedEmp)
    cy.clickButton('Search')
    cy.verifyName(search)
    cy.logout()
  })

  it('Search By Job-title <regression><sanity>',()=>{

    let jobTitle = 'HR Manager'
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.clickMenuItem('Directory').wait(2000)
    cy.selectJobTitle(jobTitle)
    cy.clickButton('Search').wait(2000)
    cy.verifyJobtitle(jobTitle)
    cy.logout()

  })

  it.only('Search By Location <regression>',()=>{

    let location = 'Texas'

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.clickMenuItem('Directory').wait(2000)
    cy.selectLocation(location)
    cy.clickButton('Search').wait(2000)
    cy.verifyLocation(location)
    cy.logout()

  })

})