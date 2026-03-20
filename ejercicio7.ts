import * as readline from "readline";

abstract class Transporte {
    abstract calcularCosto(distancia: number): number;
}

class Taxi extends Transporte {
    calcularCosto(distancia: number): number {
        return distancia * 1.5;
    }
}

class Autobus extends Transporte {
    calcularCosto(distancia: number): number {
        return distancia * 0.5;
    }
}

class Uber extends Transporte {
    calcularCosto(distancia: number): number {
        return distancia * 1.2;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("1.Taxi 2.Autobus 3.Uber: ", (op) => {
    rl.question("Distancia: ", (d) => {
        let distancia = parseFloat(d);
        let transporte: Transporte;

        if (op == "1") transporte = new Taxi();
        else if (op == "2") transporte = new Autobus();
        else transporte = new Uber();

        console.log("Costo:", transporte.calcularCosto(distancia));
        rl.close();
    });
});