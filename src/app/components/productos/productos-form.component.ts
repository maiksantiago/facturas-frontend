import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  public producto: Producto = new Producto();
  public errores: string[];

  constructor(private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.productoService.ver(id).subscribe((producto) => this.producto = producto)
      }
    });
  }

  public crear(): void {
    this.productoService.crear(this.producto).subscribe(producto => {
      this.router.navigate(['/productos'])
    }, e => {
      this.errores = e.error as string[];
      console.log(e.error);
    });
  }

  public actualizar(): void {
    this.productoService.actualizar(this.producto).subscribe(producto => {
      this.router.navigate(['/productos'])
    }, e => {
      this.errores = e.error as string[];
      console.log(e.error);
    });
  }

}