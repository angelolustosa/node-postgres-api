/// <reference types="Cypress" />

describe('GET Retornando todos os produtos', () => {
    it('GET /produtos', () => {
        cy.request('/produtos')
        .its('status')
        .should('equal', 200)
    })
})

describe('GET Retornando um produto específico', () => {
    it('GET /produto/id', () => {
        cy.request('/produto/1'),
        .its('status')
        .should('equal', 200)
    })
})