const url = 'http://localhost:3030/ouEstCharlie.html'
const txt = '#child-2';


describe('Tests de la page où est Charlie', () => {
    
    beforeEach(() => {
        cy.visit(url);
    })
            
    it('Le texte contient Charlie', () => {
        //...
    })

    it('Le texte est Charlie', () => {
        //...
    })

    it('Le texte contient un terme', () => {
        //...
    })

    it('Le texte commence par Charlie', () => {
        //...
    })

    it('Le texte fini par partager', () => {
        //...
    })
})