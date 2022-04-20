import 'mocha';
import { expect } from 'chai';
import { BaseMap } from '../src/BaseMap';
import { AddMap } from '../src/AddMapReduce';


describe('Modificacion function test', () => {
    describe('RandomNumber function test', () => {
        const baseMap = new AddMap([]);

        /*it("Se espera que se pueda instanciar un numero de una revista", () => {
            expect(baseMap).not.to.be.equal(null);
        });
        it("Se espera que se pueda hacer el metodo Iniciaicion", () => {
            expect(baseMap.initPopulation()).not.to.be.equal(null);
        });
        it("Se espera que se pueda hacer el metodo hook afterIniciacion", () => {
            expect(baseMap.afterInitialisation()).not.to.be.equal(null);
        });*/
        it("Se espera que se pueda ver la lista", () => {
            expect(baseMap.run()).not.to.be.equal(null);
        });
        it("Se espera que se pueda ver la lista", () => {
            expect(baseMap.addNumber(3)).not.to.be.equal(null);
        });
        it("Se espera que se pueda ver la lista", () => {
            expect(baseMap.run()).not.to.be.equal(null);
        });
        it("Se espera que se reducir la lista", () => {
            expect(baseMap.reduce()).to.be.eql(55);
        });
    });
});