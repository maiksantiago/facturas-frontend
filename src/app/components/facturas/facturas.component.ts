import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  public columnasMostradas: string[] = ['id', 'fechaEmision', 'cliente', 'actualizar', 'eliminar'];
  public facturas: Factura[] = [];
  public factura: Factura = new Factura();

  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.facturaService.listar().subscribe(facturas => this.facturas = facturas);
  }

  public eliminar(factura: Factura): void {
    this.facturaService.eliminar(factura.id).subscribe(response => {
      this.facturas = this.facturas.filter(f => f !== factura)
    });
  }

}