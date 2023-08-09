/// <reference types="cypress" />
import { faker }  from '@faker-js/faker'

describe('basic locators test examples', () => {
    beforeEach(() => {
       cy.visit('https://demo.nopcommerce.com/')
    })

    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let email = faker.internet.email(firstName, lastName)

    it('register demo account on nop-commerece using basic css selectors', () => {
        cy.get('.ico-register').click()
        //cy.get('.gender-male').click({force : true})
        cy.get('#gender-male').click()
        cy.get('#FirstName').type(firstName)
        cy.get('#LastName').type(lastName)
        cy.get('[name="DateOfBirthDay"]').select(4)
        cy.get('[name="DateOfBirthMonth"]').select(4)
        cy.get('[name="DateOfBirthYear"]').select('2000', {force: true})
        cy.get('[name="Email"]').type(email)
        cy.get('[name="Password"]').type("Pass123")
        cy.get('[name="ConfirmPassword"]').type("Pass123")
        cy.get('#register-button').click()

        cy.get('.page.registration-result-page')
        .should('contain', 'Your registration completed')

    })

    it('login to nop-commerece with registered account using basic css selectors', () => {
        cy.get('.ico-login').click()
        cy.url().should('contain', 'login')
        cy.get('#Email').type('idOnly@mailinator.com')
        cy.get('#Email').clear()
        cy.get("#Email.email").type('idAndclass@mailinator.com')
        cy.get("#Email.email").clear()
        cy.get('[name="Email"]').type("Enter Wrong email{enter}")
        cy.get('#Email-error').then(text => {
            cy.log(text.text())
        })
        cy.get('#Email-error').should('contain', 'Wrong email')
        cy.get("#Email.email").clear()

        cy.get("#Email.email").type(email)
        cy.get('#Password').type("Pass123")
        cy.get('[type="Submit"].login-button').click()

        cy.get('.ico-account').should('have.text', 'My account')
    })
})