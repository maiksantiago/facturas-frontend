import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public columnasMostradas: string[] = ['id', 'nombre', 'precio', 'stock', 'categoria', 'actualizar', 'eliminar'];
  public productos: Producto[] = [];
  public producto: Producto = new Producto();

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.listar().subscribe(productos => this.productos = productos);
  }

  public eliminar(producto: Producto): void {
    this.productoService.eliminar(producto.id).subscribe(response => {
      this.productos = this.productos.filter(p => p !== producto)
    });
  }

}