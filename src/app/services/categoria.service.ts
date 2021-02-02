import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends CommonService<Categoria> {

  protected endpoint = "http://localhost:8080/api/categorias";

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}