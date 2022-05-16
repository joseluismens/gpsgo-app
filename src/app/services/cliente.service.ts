import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { map } from 'rxjs/operators';
import { URL } from "../variables";
import { Usuario } from '../interfaces/usuario';
import { Cliente } from '../interfaces/ICliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private storage: Storage) { 
    
  }

  clientes_spa():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${URL}clientes_spa`);
  }
  clientes_limitada(){
    return this.http.get(`${URL}clientes_ltda`);
  }
  getUsuarios(){
    return this.http.get(`${URL}usuarios`);
  }
  async getId(){
     return   await this.storage.get("id").then((val)=>{ 
      return val;
        
    });
  }
  async getUsuario(){
    return   await this.storage.get("usuario").then((val)=>{ 
     return val;
       
   });
 }
  infoUsuario (codigo){
     
    return this.http.get(`${URL}usuario/${codigo}`);
  
  }
  
  getTicketsPendientes (usuario){
     
    return this.http.get(`${URL}tickets-pendientes/${usuario}`);
  
  }
  getTicketsRelizados (usuario){
     
    return this.http.get<Usuario>(`${URL}tickets-realizados/${usuario}`);
  
  }
  getInfoCliente(id:string){
    return this.http.get(`${URL}info-cliente/${id}`);

  }

}
