import { Cliente } from './cliente';
import { Common } from './common';
import { Item } from './item';

export class Factura implements Common {
    id: number;
    fechaEmision: string;
    cliente: Cliente;
    items: Item[] = [];
}