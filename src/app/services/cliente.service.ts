import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CommonService<Cliente> {

  protected endpoint = "http://localhost:8080/api/clientes";

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}