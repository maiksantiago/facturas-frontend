import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/factura';
import { Item } from 'src/app/models/item';
import { Producto } from 'src/app/models/producto';
import { ClienteService } from 'src/app/services/cliente.service';
import { FacturaService } from 'src/app/services/factura.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-facturas-form',
  templateUrl: './facturas-form.component.html',
  styleUrls: ['./facturas-form.component.css']
})
export class FacturasFormComponent implements OnInit {

  public factura: Factura = new Factura();
  public errores: string[];

  public productos: Producto[] = [];
  public productosFiltrados: Producto[] = [];

  constructor(private facturaService: FacturaService,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let idCliente = params['idCliente'];
      if (idCliente) {
        this.clienteService.ver(idCliente).subscribe((cliente) => this.factura.cliente = cliente)
      }
    });
  }

  public crear(): void {
    console.log(this.factura);
    this.facturaService.crear(this.factura).subscribe(factura => {
      this.router.navigate(['/clientes'])
    }, e => {
      this.errores = e.error as string[];
      console.log(e.error);
    });
  }

  public filtrarProductoPorNombre(nombre: string): void {
    nombre = nombre !== undefined ? nombre.trim() : '';
    if (nombre !== '') {
      this.productoService.filtrarPorNombre(nombre)
        .subscribe(productos => this.productosFiltrados = productos.filter(pf => {
          let filtrar = true;
          this.productos.forEach(p => {
            if (pf.id === p.id) {
              filtrar = false;
            }
          });
          return filtrar;
        }));
    }
  }

  public seleccionProducto(seleccion: MatListOption[]): void {
    seleccion.map(seleccion => {
      let producto = seleccion.value as Producto;
      if (this.existeItem(producto.id)) {
        this.incrementarCantidad(producto.id);
      } else {
        let item = new Item();
        item.producto = producto;
        this.factura.items.push(item);
      }
    });
  }

  public existeItem(id: number): boolean {
    let existe = false;
    this.factura.items.forEach(item => {
      if (id === item.producto.id) {
        existe = true;
      }
    });
    return existe;
  }

  public incrementarCantidad(id: number): void {
    this.factura.items = this.factura.items.map(item => {
      if (id === item.producto.id && item.cantidad < item.producto.stock) {
        ++item.cantidad;
      }
      return item;
    });
  }

  public actualizarCantidad(id: number, event: any): void {
    let cantidad: number = event.target.value as number;
    if (cantidad == 0) {
      return this.eliminarItem(id);
    }
    this.factura.items = this.factura.items.map(item => {
      if (id === item.producto.id) {
        item.cantidad = cantidad;
      }
      return item;
    });
  }

  public eliminarItem(id: number): void {
    this.factura.items = this.factura.items.filter(item => id != item.producto.id);
  }

}