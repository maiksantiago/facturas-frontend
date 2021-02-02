import { Common } from './common';
import { Producto } from './producto';

export class Item implements Common {
    id: number;
    cantidad: number;
    producto: Producto;
}