import 'mocha';
import { expect } from 'chai';
import { RandomNumber } from '../src/racional';
import { SetRandomNumber } from '../src/set';

describe('Modificacion function test', () => {
    describe('RandomNumber function test', () => {
        const randomNumber = RandomNumber.getRandomNumber();
        
        it("Se espera que se pueda instanciar un numero racional", () => {
            expect(randomNumber).not.to.be.equal(null);
        });
        it("Se espera que se pueda obtener un numero flotante aleatorio entre 0 y 1", () => {
            expect(randomNumber.getFloatNumber_0_1()).to.be.below(1);
            expect(randomNumber.getFloatNumber_0_1()).not.to.be.below(0);
        });
        it("Se espera que se pueda obtener un numero flotante aleatorio entre 1 y 8", () => {
            expect(randomNumber.getFloatNumber_N_M(1,8)).to.be.below(8);
            expect(randomNumber.getFloatNumber_N_M(1,8)).not.to.be.below(1);
        });
        it("Se espera que se pueda obtener un numero entero aleatorio entre 2 y 5", () => {
            expect(randomNumber.getFloatNumber_N_M(2,5)).to.be.below(5);
            expect(randomNumber.getFloatNumber_N_M(2,5)).not.to.be.below(2);
        });

        const set = new SetRandomNumber([]);

        it("Se espera que se pueda instanciar un set de numeros", () => {
            expect(set).not.to.be.equal(null);
        });
        it("Se espera que se pueda establecer un set de numeros", () => {
            expect(set.setConjunto()).not.to.be.equal(null);
        });
        it("Se espera que se pueda obtener un set de numeros", () => {
            expect(set.getConjunto()).not.to.be.equal(null);
        });
    });
});