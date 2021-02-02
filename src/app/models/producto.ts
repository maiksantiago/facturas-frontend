import { Categoria } from './categoria';
import { Common } from './common';

export class Producto implements Common {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: Categoria;
}