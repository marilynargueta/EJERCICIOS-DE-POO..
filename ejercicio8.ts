abstract class Producto {
  nombre: string;
  precio: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }

  abstract calcularPrecioFinal(): number;

  mostrarInformacion(): void {
    console.log("Producto:", this.nombre);
    console.log("Precio base:", this.precio);
    console.log("Precio final:", this.calcularPrecioFinal());

  }
}

class Electronico extends Producto {
  calcularPrecioFinal(): number {
    return this.precio * 1.15; // 15% impuesto
  }
}

class Ropa extends Producto {
  calcularPrecioFinal(): number {
    return this.precio * 0.9; // 10% descuento
  }
}

class Alimento extends Producto {
  calcularPrecioFinal(): number {
    return this.precio * 1.05; // 5% impuesto
  }
}


const p1 = new Electronico("Laptop", 1000);
const p2 = new Ropa("Camisa", 50);
const p3 = new Alimento("Pan", 10);

p1.mostrarInformacion();
p2.mostrarInformacion();
p3.mostrarInformacion();