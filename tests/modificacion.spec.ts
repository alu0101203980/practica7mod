import 'mocha';
import { expect } from 'chai';
import { Revista } from '../src/revista';
import { Suscriptor } from '../src/suscriptor';


describe('Modificacion function test', () => {
    describe('RandomNumber function test', () => {
        const marca1 = new Revista('Marca1','20 de febrero',10);
        const Diego = new Suscriptor('Diego');
        const Hugo = new Suscriptor('Hugo');

        marca1.subscribe(Diego);

        it("Se espera que se pueda instanciar un numero de una revista", () => {
            expect(marca1).not.to.be.equal(null);
        });
        it("Se espera se pueda instanciar un suscriptor", () => {
            expect(Diego).not.to.be.equal(null);
        });

        it("Se espera ver la notificacion de suscripcion", () => {
            expect(marca1.subscribe(Diego)).to.be.eql("Diego subscribed to Marca1 numbers.");
        });

        it("Se espera ver la notificacion de suscripcion", () => {
            expect(marca1.subscribe(Hugo)).to.be.eql("Hugo subscribed to Marca1 numbers.");
        });
        it("Se espera ver la publicación de un nuevo número", () => {
            expect(marca1.nuevoNumero({title: '1-Fútbol',})).to.be.eql("Marca1 published a new article: '1-Fútbol'");
        });
        it("Se espera ver la notificacion de una desuscripcion", () => {
            expect(marca1.unsubscribe(Hugo)).to.be.eql("Hugo unsubscribed from Marca1 articles.");
        });
        it("Se espera ver la publicación de un nuevo número", () => {
            expect(marca1.nuevoNumero({title: '2-Baloncesto',})).to.be.eql("Marca1 published a new article: '2-Baloncesto'");
        });
    });
});