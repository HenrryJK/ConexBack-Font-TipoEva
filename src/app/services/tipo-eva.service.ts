import { Injectable } from '@angular/core';
import {TipoEva} from  '../models/tipo-eva';
import {Observable , Subscription , of } from 'rxjs' ;
import {HttpClient ,  HttpHeaders , HttpRequest , HttpEvent} from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class TipoEvaService {
  private  HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private TipoEvaUrl:string = 'http://localhost:8080/tipoevaluacion/all';
  constructor(private  http : HttpClient) { }
  getTipoEva() : Observable<TipoEva[]>{
    return this.http.get<TipoEva[]>(this.TipoEvaUrl);
  }

}
