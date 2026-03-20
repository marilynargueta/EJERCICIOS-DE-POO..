abstract class notificaciones {
    mensaje: string;

    constructor(mensaje: string) {
        this.mensaje = mensaje;
    }

    abstract enviar(): void;
}

class email extends notificaciones {
    constructor(mensaje: string) {
        super(mensaje);
    }

    enviar(): void {
        console.log(`Enviando correo a ${this.mensaje}`);
    }
}

class sms extends notificaciones {
    constructor(mensaje: string) {
        super(mensaje);
    }

    enviar(): void {
        const numero = this.mensaje.replace(/[^0-9]/g, "");
        console.log(`Enviando sms a ${numero}`);
    }
}

class whatsapp extends notificaciones {
    constructor(mensaje: string) {
        super(mensaje);
    }

    enviar(): void {
        let numero = this.mensaje.replace(/[^0-9]/g, "");
        numero = numero.substring(0, numero.length - 1);
        console.log(`Enviando whatsapp a ${numero}`);
    }
}


const n1 = new email("marialopez@gmail.com");
const n2 = new sms("7299-6756");
const n3 = new whatsapp("7897-3478");

n1.enviar();
n2.enviar();
n3.enviar();
