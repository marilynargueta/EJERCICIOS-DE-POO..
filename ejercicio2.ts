abstract class Vehiculo {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    abstract mover(): void;
}

class Carro extends Vehiculo {
    mover(): void {
        console.log(" El vehiculo se esta moviendo a 40km/h");        
    }
}

class Moto extends Vehiculo {
    mover(): void {
        console.log(" La motocicleta se esta moviendo a 120km/h");        
    }
}

class Bicicleta extends Vehiculo {
    mover(): void {
        console.log(" La bicicleta se esta moviendo a 20km/h");        
    }
}

    const carrito = new Carro("Honda");
    carrito.mover();



