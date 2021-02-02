import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public columnasMostradas: string[] = ['id', 'nombre', 'apellido', 'direccion', 'telefono', 'correoElectronico', 'actualizar', 'eliminar'];
  public clientes: Cliente[] = [];
  public cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(clientes => this.clientes = clientes);
  }

  public eliminar(cliente: Cliente): void {
    this.clienteService.eliminar(cliente.id).subscribe(response => {
      this.clientes = this.clientes.filter(c => c !== cliente)
    });
  }

}