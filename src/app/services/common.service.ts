import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Common } from '../models/common';

export class CommonService<E extends Common> {

  protected endpoint: string;
  protected httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(protected httpClient: HttpClient) { }

  public listar(): Observable<E[]> {
    return this.httpClient.get<E[]>(this.endpoint);
  }

  public ver(id: number): Observable<E> {
    return this.httpClient.get<E>(`${this.endpoint}/${id}`)
  }

  public crear(entity: E): Observable<E> {
    return this.httpClient.post<E>(this.endpoint, entity, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.entity as E),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  public actualizar(entity: E): Observable<E> {
    return this.httpClient.put<E>(`${this.endpoint}/${entity.id}`, entity, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.entity as E),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  public eliminar(id: number): Observable<E> {
    return this.httpClient.delete<E>(`${this.endpoint}/${id}`, { headers: this.httpHeaders })
  }

}