import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService extends CommonService<Factura> {

  protected endpoint = "http://localhost:8080/api/facturas/";

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}