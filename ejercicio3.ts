abstract class Figura {

    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    abstract area(): number;
    abstract perimetro(): number;
}

class cuadrado extends Figura {
    lado: number;

    constructor(lado: number) {
        super(lado, lado);
        this.lado = lado;
    }

    area(): number {
        return this.lado * this.lado;
    }

    perimetro(): number {
        return 4 * this.lado;
    }
}

class rectangulo extends Figura {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        super(ancho, alto);
        this.ancho = ancho;
        this.alto = alto;
    }

    area(): number {
        return this.ancho * this.alto;
    }

    perimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}

class circulo extends Figura {
    radio: number;

    constructor(radio: number) {
        super(radio, radio);
        this.radio = radio;
    }

    area(): number {
        return Math.PI * this.radio * this.radio;
    }

    perimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

const cuadrado1 = new cuadrado(9);
console.log("cuadrado");
console.log("El area es: " + cuadrado1.area());
console.log("El perimetro es: " + cuadrado1.perimetro());

const rectangulo1 = new rectangulo(5, 9);
console.log("rectangulo");
console.log("El area es: " + rectangulo1.area());
console.log("El perimetro es: " + rectangulo1.perimetro());

const circulo1 = new circulo(3);
console.log("circulo");
console.log("El area es: " + circulo1.area());
console.log("El perimetro es: " + circulo1.perimetro());