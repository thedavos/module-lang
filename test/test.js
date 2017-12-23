
const expect = require('chai').expect
const newlang = require('..').default

describe('#newlang', function(){
    it('Si la palabra termina en "ar", se le quitan esos dos caractéres', function() {
        const translation = newlang('Programar')
        expect(translation).to.equal('Program')
    })
    
    it('Si la palabra inicia con Z, se le añade "pe" al final', function() {
        const translation = newlang('Zorro')
        const translation2 = newlang('Zarpar')
        
        expect(translation).to.equal('Zorrope')
        expect(translation2).to.equal('Zarppe')
    })

    it('Si la palabra traducida tiene 10 o más letras se debe partir a la mitad y unir con un guion', function() {
        const translation = newlang('abecedario')
        
        expect(translation).to.equal('abece-dario')
    })

    it('Si la palabra original es un palíndromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function() {
        const translation = newlang('sometemos')
        expect(translation).to.equal('SoMeTeMoS')
    })
})