/**
 * Clase Random Number para generar números aleatorios
 */
export class RandomNumber {

    /**
     * Método privado estático
     */
    private static randomNumber: RandomNumber;
/**
 * Constructor por defecto
 */
    private constructor() {}

    /**
     * Creación de la isntancia de la clase
     * @returns Devuelve la instancia de la clase
     */
    public static getRandomNumber(): RandomNumber {
        if (!RandomNumber.randomNumber) {
            RandomNumber.randomNumber = new RandomNumber();
        }
        return RandomNumber.randomNumber;
    }

/**
 * Genera número aletaorio flotante entre 0 y 1
 * @returns Número flotante generado entre 0 y 1
 */
    getFloatNumber_0_1() {
        return Math.random();
    }
/**
 * Genera número aletaorio flotante entre el min y el max
 * @param min Límite inferior
 * @param max Límite superior
 * @returns Número flotante generado entre min y max
 */
    getFloatNumber_N_M(min: number, max: number) {
        return Math.random() * (max - min + 1) + min;
    }
/**
 * Genera número aletaorio entero entre el min y el max
 * @param min Límite inferior
 * @param max Límite superior
 * @returns Número entero generado entre min y max
 */
    getIntegerNumber_N_M(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}



