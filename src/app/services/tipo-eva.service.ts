import { Injectable } from '@angular/core';
import {Observable, Subscription, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { TipoEva } from '../models/tipo-eva';
@Injectable({
  providedIn: 'root'
})
export class TipoEvaService {
  private  HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private TipoEvaUrl:string = 'http://localhost:8080/tipoevaluacion';
  constructor(private  http : HttpClient) { }

  getTipoEvas():Observable<TipoEva[]>{
    return this.http.get<TipoEva[]>(this.TipoEvaUrl+'/all');
  }
  getTipoEva(id:number):Observable<TipoEva[]> {
    return this.http.get<TipoEva[]>(this.TipoEvaUrl+'/'+id);
  }
  addTipoEva(tipoeva: TipoEva): Observable<number>{
    return this.http.post<number>(this.TipoEvaUrl+"/add", tipoeva, {headers:this.HttpHeaders});
  }

  deleteTipoEva(tipoeva: TipoEva) {
    return this.http.delete(this.TipoEvaUrl+'/delete/'+tipoeva.id_tipo_eva);
  }

  updateTipoEva(tipoeva: TipoEva) {
    return this.http.put(`${this.TipoEvaUrl}/update/`, tipoeva);
  }

}
