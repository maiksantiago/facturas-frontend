import { Common } from './common';
import { Producto } from './producto';

export class Item implements Common {
    id: number;
    cantidad: number = 1;
    producto: Producto;

    public calcularPrecioTotal(): number {
        return this.cantidad * this.producto.precio;
    }
}