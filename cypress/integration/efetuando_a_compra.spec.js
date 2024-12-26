/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Página de produtos',() => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve adicionar quatro produtos ao carrinho - Usando Comando customizado',() => {
        cy.addProdutos('Aero Daily Fitness Tee', 'S', 'Black', 2)
        cy.visit('produtos')
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 5)
        cy.visit('produtos')
        cy.addProdutos('Aether Gym Pant', '36', 'Brown', 1)
        cy.visit('produtos')
        cy.addProdutos('Argus All-Weather Tank', 'XL', 'Gray', 3)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type('Carlos')
        cy.get('#billing_last_name').type('Henrryque')
        cy.get('#billing_company').type('EBAC')
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
        cy.get('#billing_address_1').type('Sobradinho')
        cy.get('#billing_address_2').type(402)
        cy.get('#billing_city').type('Brasília')
        cy.get('#select2-billing_state-container').click().type('Distrito Federal{enter}')
        cy.get('#billing_postcode').type(73402099)
        cy.get('#billing_phone').type(61999999999)
        cy.get('#billing_email').type('carlos@ebac.com.br')
        cy.get('#terms').check()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain' ,'Obrigado. Seu pedido foi recebido.')

    });

});