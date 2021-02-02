import { Common } from './common';
import { Factura } from './factura';

export class Cliente implements Common {
    id: number;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    correoElectronico: string;
    facturas: Factura[] = [];
}