import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CommonService<Cliente> {

  protected endpoint = "http://localhost:8080/api/clientes";

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public filtrarPorNombre(nombre: string): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.endpoint}/filtrar/${nombre}`);
  }

}