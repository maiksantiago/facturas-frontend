import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends CommonService<Producto> {

  protected endpoint = "http://localhost:8080/api/productos";

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}