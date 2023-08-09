/// <reference types="cypress" />
import { faker }  from '@faker-js/faker'

describe('basic locators test', () => {
    beforeEach(() => {
       cy.visit('https://demo.nopcommerce.com/')
    })

    let email;

    it.only('register a demo account on nop-commerece using attribute css selectors', () => {
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        email = faker.internet.email(firstName, lastName)

        cy.get('.ico-register').click()
        //cy.get('.gender-male').click({force : true})
        cy.get('#gender-male').click()
        cy.get('#FirstName').type(firstName)
        cy.get('#LastName').type(lastName)
        //cy.get('[name="DateOfBirthDay"]').select(1)
        cy.get('[name*="BirthDay"]').select(1) //*= operator means contains
        cy.get('[name$="Month"]').select(1) // $= operator means ends with
        cy.get('[name="DateOfBirthYear"]').select('2000', {force: true})
        cy.get('[data-val-required*="mail"]').type(email)
        cy.get('[name="Password"]').type("Pass123")
        cy.get('[name^="Confirm"]').type("Pass123") //^= means starts with
        cy.get('#register-button').click()
        cy.get('.page.registration-result-page')
        .should('contain', 'Your registration completed')
    })
})