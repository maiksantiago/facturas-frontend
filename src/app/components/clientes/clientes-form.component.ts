import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public errores: string[];

  constructor(private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clienteService.ver(id).subscribe((cliente) => this.cliente = cliente)
      }
    });
  }

  public crear(): void {
    this.clienteService.crear(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes'])
    }, e => {
      this.errores = e.error as string[];
      console.log(e.error);
    });
  }

  public actualizar(): void {
    this.clienteService.actualizar(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes'])
    }, e => {
      this.errores = e.error as string[];
      console.log(e.error);
    });
  }

}