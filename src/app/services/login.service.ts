import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators'
import { AlertController, MenuController } from "@ionic/angular";
import { Usuario } from "../interfaces/usuario";
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { URL } from "../variables";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new Usuario;
  codigo: any;
  clientes: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,
              private alertController: AlertController, 
              private storage: Storage, 
              private router: Router,
              private menuController:MenuController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Credencias incorrectas",
      subHeader: "Intente nuevamente",
      buttons: ["OK"]
    });
    await alert.present();

  }
  async alertPerfiles() {
    const alert = await this.alertController.create({
      header: "Hubo un problema",
      subHeader: "su perfil no puede utlizar esta aplicación",
      buttons: ["OK"]
    });
    await alert.present();

  }

  inciarSesion(usuario: string, contrasena: string) {

    let data = {
      "usuario": usuario,
      "password": contrasena
    };
  

    return this.http.post(`${URL}login`, JSON.stringify(data),this.httpOptions).pipe(map((resp: any) => {
      if (resp.error) {

        this.presentAlert();
      } else {
        console.log("logeado");
        console.log(resp.usuario);
        const   { nombres, apellidos, codigo_venta, nivel1, img_perfil, id,  usuario} = resp.usuario;

        if (nivel1 === "Venta" || nivel1 === "Administracion" || nivel1 == "Soporte" || nivel1 == "Cobranza") {
            let codigo:string ;
          if (nivel1 === "Administracion" || nivel1 == "Soporte" || nivel1 == "Cobranza") {
            codigo = "000";
          } else {
            codigo = codigo_venta;
          }

          this.user.codigo=codigo;
          this.user.nombres = nombres;
          this.user.apellidos = apellidos;
          this.user.id = id;
          this.user.usuario = usuario;
          this.user.img_perfil = "https://sgo2.ingetecservice.cl/img_perfil/thumbs/" + img_perfil;

          console.log(this.user.codigo);


          this.guardar_usuario(this.user);
          this.menuController.enable(false);

          this.router.navigate(['/clientes']);

        } else {
          this.alertPerfiles();


        }





      }
    }));

  }

  guardar_usuario(usuario: Usuario) {

    this.storage.set("nombres", usuario.nombres);
    this.storage.set("apellidos", usuario.apellidos);
    this.storage.set("id", usuario.id);
    this.storage.set("img_perfil", usuario.img_perfil);
    this.storage.set("codigo_venta", usuario.codigo);
    this.storage.set("usuario", usuario.usuario);

    this.router.navigate(['/intro']);

  }

  verificar_login() {
    this.storage.get('nombres').then((data) => {
      if (data) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);

      }
    });
  }

 






}


