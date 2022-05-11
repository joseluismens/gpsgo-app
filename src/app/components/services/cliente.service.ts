import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {



  url = "https://sgo2.ingetecservice.cl/index.php/Apisgo/clientes_get";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getClientes():Observable<any>{
    return this.http.get(this.url);
  }
}
