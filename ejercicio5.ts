abstract class Pago {
    constructor(
        protected total: number,
        protected fecha: string
    ) {}

    abstract procesarPago(): void;
}


class PagoEfectivo extends Pago {
    constructor(total: number, fecha: string, private dineroRecibido: number) {
        super(total, fecha);
    }

    procesarPago(): void {
        if (this.dineroRecibido >= this.total) {
            const cambio = this.dineroRecibido - this.total;
            console.log(`Pago en efectivo realizado. Cambio: $${cambio}`);
        } else {
            console.log("Dinero insuficiente");
        }
    }
}


class PagoTarjeta extends Pago {
    constructor(total: number, fecha: string, private saldo: number) {
        super(total, fecha);
    }

    procesarPago(): void {
        if (this.saldo >= this.total) {
            console.log("Pago con tarjeta aprobado");
        } else {
            console.log("Tarjeta declinada por saldo insuficiente");
        }
    }
}


class TransferenciaBancaria extends Pago {
    constructor(total: number, fecha: string, private saldoCuenta: number) {
        super(total, fecha);
    }

    procesarPago(): void {
        if (this.saldoCuenta >= this.total) {
            console.log("Transferencia realizada con éxito");
        } else {
            console.log("La transferencia no se realizó");
        }
    }
}


const p1 = new PagoEfectivo(100, "2026-03-19", 120);
const p2 = new PagoTarjeta(200, "2026-03-19", 150);
const p3 = new TransferenciaBancaria(300, "2026-03-19", 500);

p1.procesarPago(); 
p2.procesarPago(); 
p3.procesarPago(); 