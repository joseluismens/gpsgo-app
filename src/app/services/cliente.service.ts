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

  clientes_spa(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${URL}clientes_spa`);
  }
  clientes_limitada() {
    return this.http.get(`${URL}clientes_ltda`);
  }
  getUsuarios() {
    return this.http.get(`${URL}usuarios`);
  }
  async getId() {
    return await this.storage.get("id").then((val) => {
      return val;

    });
  }
  async getUsuario() {
    return await this.storage.get("usuario").then((val) => {
      return val;

    });
  }
  async getNombre() {
    return await this.storage.get("nombres").then((val) => {
      return val;

    });
  }
  async getApellido() {
    return await this.storage.get("apellidos").then((val) => {
      return val;

    });
  }
  async getCodigo_venta() {
    return await this.storage.get("codigo_venta").then((val) => {
      return val;

    });
  }
  infoUsuario(codigo: string) {

    return this.http.get(`${URL}usuario/${codigo}`);

  }

  getTicketsPendientes(usuario) {

    return this.http.get(`${URL}tickets-pendientes/${usuario}`);

  }
  getTicketsRelizados(usuario) {

    return this.http.get<Usuario>(`${URL}tickets-realizados/${usuario}`);

  }
  getInfoCliente(id: string) {
    return this.http.get(`${URL}info-cliente/${id}`);

  }
  getInfoUsuario(id: string) {
    return this.http.get(`${URL}datos-acceso/${id}`);

  }
  getMoviles(id: string) {
    return this.http.get(`${URL}moviles/${id}`);
  }
  getSuspendidos(id: string) {
    return this.http.get(`${URL}suspendidos/${id}`);
  }
  crearTicket(comentario: string, ticket: string, destinatario: string, abonado: number, enviada_por: string) {
    let data = {
      "comentario": comentario,
      "ticket": ticket,
      "destinatario": destinatario,
      "abonado": abonado,
      "enviada_por": enviada_por
    }
    return this.http.post(`${URL}crear-ticket`, JSON.stringify(data), this.httpOptions);
  }

}
