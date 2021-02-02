import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-facturas-form',
  templateUrl: './facturas-form.component.html',
  styleUrls: ['./facturas-form.component.css']
})
export class FacturasFormComponent implements OnInit {

  public factura: Factura = new Factura();
  public errores: string[];

  constructor(private facturaService: FacturaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.facturaService.ver(id).subscribe((factura) => this.factura = factura)
      }
    });
  }

  public crear(): void {
    this.facturaService.crear(this.factura).subscribe(factura => {
      this.router.navigate(['/facturas'])
    }, e => {
      this.errores = e.error as string[];
      console.log(e.error);
    });
  }

  public actualizar(): void {
    this.facturaService.actualizar(this.factura).subscribe(factura => {
      this.router.navigate(['/facturas'])
    }, e => {
      this.errores = e.error as string[];
      console.log(e.error);
    });
  }

}