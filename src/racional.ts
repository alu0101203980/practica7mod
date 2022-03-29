export class Racional {
    /**
     * Constructor de la clase **Racional**
     * @param numerador Numerador del número racional
     * @param denominador Denominador del número racional
     */
    constructor(private numerador: number, private denominador: number) {
        this.numerador = Math.floor(numerador);
        this.denominador = Math.floor(denominador);
        if (denominador == 0) {
            this.denominador = 1;
        }
    }
    /**
     * Método para obtener el numerador
     * @returns Devuelve el numerador
     */
    public getNumerador() {
        return this.numerador;
    }
    /**
     * Método para obtener el denominador
     * @returns Devuelve el denominador
     */
    public getDenominador() {
        return this.denominador;
    }
    /**
     * Método para establecer el numerador
     * @param n Valor del numerador
     */
    public setNumerador(n: number) {
        this.numerador = n;
    }

    /**
     * Método para establecer el denominador
     * @param n Valor del denominador
     */
    public setDenominador(n: number) {
        this.denominador = n;
    }

    /**
     * Método para invertir un número racional
     * @param n Numero racional que se va a invertir
     * @returns Devuelve un nuevo número racional invertido
     */
    public invertir(n: Racional): Racional {
        let aux1: number = n.getNumerador();
        let aux2: number = n.getDenominador();
        const racionalInvertido = new Racional(aux2,aux1);
        return racionalInvertido;
    }

    /**
     * Método para sumar dos racionales
     * @param n1 Racional1 a sumar
     * @param n2 Racional2 a sumar
     * @returns Devueleve la suma de los racionales
     */
    public sumar(n1: Racional, n2: Racional): Racional {
        let aux1: number = n1.getNumerador() + n2.getNumerador();
        let aux2: number = n1.getDenominador() + n2.getDenominador();
        const racionalSumado = new Racional(aux1,aux2);
        return racionalSumado;
    }
    /**
     * Método para restar dos racionales
     * @param n1 Racional1 a restar
     * @param n2 Racional2 a restar
     * @returns Devueleve la resta de los racionales
     */
    public restar(n1: Racional, n2: Racional): Racional {
        let aux1: number = n1.getNumerador() - n2.getNumerador();
        let aux2: number = n1.getDenominador() - n2.getDenominador();
        const racionalSumado = new Racional(aux1,aux2);
        return racionalSumado;
    }
    /**
     * Método para multiplicar dos racionales
     * @param n1 Racional1 a multiplicar
     * @param n2 Racional2 a multiplicar
     * @returns Devueleve la multiplicacion de los racionales
     */
    public multiplicar(n1: Racional, n2: Racional): Racional {
        let aux1: number = n1.getNumerador() * n2.getNumerador();
        let aux2: number = n1.getDenominador() * n2.getDenominador();
        const racionalRestado = new Racional(aux1,aux2);
        return racionalRestado;
    }
    /**
     * Método para dividir dos racionales
     * @param n1 Racional1 a dividir
     * @param n2 Racional2 a dividir
     * @returns Devueleve la dividisión de los racionales
     */
    public dividir(n1: Racional, n2: Racional): Racional {
        let aux1: number = n1.getNumerador() * n2.getDenominador();
        let aux2: number = n1.getDenominador() * n2.getNumerador();
        const racionalRestado = new Racional(aux1,aux2);
        return racionalRestado;
    }
    /**
     * Método para mostrar un Racional
     * @returns Devuleve la cadena con el racional
     */
    public mostrarRacional(): string {
        let str: string = '';
        str = str.concat(this.numerador.toString());
        str = str.concat('/');
        str = str.concat(this.denominador.toString());
        return str;
    }

    public maximoComunDivisor(a: number, b: number) {
        let temporal;//Para no perder b
        while (b != 0) {
            temporal = b;
            b = a % b;
            a = temporal;
        }
        return a;
    }

    public minimoComunMultiplo(a: number, b: number) {
        return (a * b) / this.maximoComunDivisor(a, b);
    }
    
    public simplifica(n: Racional): Racional {
        const mcd = this.maximoComunDivisor(n.getNumerador(), n.getDenominador());
        return new Racional(n.getNumerador() / mcd, n.getDenominador() / mcd);
    }
}


console.log("dev");