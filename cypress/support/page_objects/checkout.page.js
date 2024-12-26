class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, endereco, numero, cidade, estado, cep, telefone, email) {
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_first_name').type(sobrenome)
        cy.get('#billing_company').type(empresa)
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
        cy.get('#billing_address_1').type(endereco)
        cy.get('#billing_address_2').type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#place_order').click()
    }

    editarEnderecoEntrega() {
        //elemte
    }

}

export default new EnderecoPage()