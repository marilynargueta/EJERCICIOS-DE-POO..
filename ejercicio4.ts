abstract class Empleado {

    nombre: string;
    salario: number;

    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this.salario = salario;
    }

    abstract calcularSalario(): number;
}

class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;

    constructor(nombre: string, salario: number, horasTrabajadas: number) {
        super(nombre, salario);
        this.horasTrabajadas = horasTrabajadas;
    }

    calcularSalario(): number {
        return this.salario * this.horasTrabajadas;
    }
}

abstract class EmpleadoPorDias extends Empleado {
    diasTrabajados: number;

    constructor(nombre: string, salario: number, diasTrabajados: number) {
        super(nombre, salario);
        this.diasTrabajados = diasTrabajados;
    }

    abstract calcularSalario(): number;
}

class EmpleadoFijo extends EmpleadoPorDias {
    constructor(nombre: string, salario: number, diasTrabajados: number) {
        super(nombre, salario, diasTrabajados);
    }

    calcularSalario(): number {
        return this.salario * this.diasTrabajados;
    }
}
const empleado1 = new EmpleadoPorHoras(" Enmanuel ", 400, 40);
console.log("El salario de " + empleado1.nombre + " es: " + empleado1.calcularSalario());


const empleado2 = new EmpleadoFijo (" Josue ", 300, 31);
console.log("El salario de " + empleado2.nombre + " es " + empleado2.calcularSalario());      
