import 'mocha';
import { expect } from 'chai';
import { Racional } from '../../p7mod/src/racional';

describe('Modificacion function test', () => {
    describe('Racional function test', () => {
        const n1 = new Racional(2,3);
        const n2 = new Racional(1,2);
        const n3 = new Racional(2,4);
        
    
        it("Se espera que se pueda instanciar un numero racional", () => {
            expect(n1).not.to.be.equal(null);
        });
        describe('Racional getters test', () => {
            it("Se espera poder acceder al numerador", () => {
                expect(n1.getNumerador()).to.be.eql(2);
            });
            it("Se espera poder acceder al denominador", () => {
                expect(n1.getDenominador()).to.be.eql(3);
            });
        });
        describe('Racional setters test', () => {
            it("Se espera poder establecer el numerador", () => {
                n1.setNumerador(2)
                expect(n1.getNumerador()).to.be.eql(2);
            });
            it("Se espera poder establecer el denominador", () => {
                n1.setDenominador(3)
                expect(n1.getDenominador()).to.be.eql(3);
            });
        });
        describe('Racional methods test', () => {
            it("Se espera poder simplificar el número racional", () => {
                expect(n3.simplifica(n3).getNumerador()).to.be.eql(1);
                expect(n3.invertir(n3).getDenominador()).to.be.eql(2);
            });
            it("Se espera poder invertir el número racional", () => {
                expect(n1.invertir(n1).getNumerador()).to.be.eql(3);
                expect(n1.invertir(n1).getDenominador()).to.be.eql(2);
            });
            it("Se espera poder sumar dos números racionales", () => {
                expect(n1.sumar(n1,n2).getNumerador()).to.be.eql(3);
                expect(n1.sumar(n1,n2).getDenominador()).to.be.eql(5);
            });
            it("Se espera poder restar dos números racionales", () => {
                expect(n1.restar(n1,n2).getNumerador()).to.be.eql(1);
                expect(n1.restar(n1,n2).getDenominador()).to.be.eql(1);
            });
            it("Se espera poder multiplicar dos números racionales", () => {
                expect(n1.multiplicar(n1,n2).getNumerador()).to.be.eql(2);
                expect(n1.multiplicar(n1,n2).getDenominador()).to.be.eql(6);
            });
            it("Se espera poder dividir dos números racionales", () => {
                expect(n1.dividir(n1,n2).getNumerador()).to.be.eql(4);
                expect(n1.dividir(n1,n2).getDenominador()).to.be.eql(3);
            });
            it('Se espera poder mostrar el número racional', () => {
                expect(n1.mostrarRacional()).to.be.eql('2/3');
            });
        });
    });
});