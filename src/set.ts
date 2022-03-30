import  { RandomNumber } from '../src/racional';

/**
 * Clase que contiene un conjunto de números 
 */
export  class SetRandomNumber {

    /**
     * Constructor de la clase
     * @param conjunto Vector de números
     */
    constructor(private conjunto: number[]) {}

    /**
     * Método para establecer el conjunto
     */
    public setConjunto() {
        const randomNumber = RandomNumber.getRandomNumber();
        for (let i=0; i < 8; i++) {
            this.conjunto.push(randomNumber.getFloatNumber_N_M(1,5))
        }
    }
    /**
     * Método para obtener el conjunto
     * @returns Devuelve el conjunto de números
     */
    public getConjunto() {
        return this.conjunto;
    }
}