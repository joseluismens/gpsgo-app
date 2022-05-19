import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ModalController, ToastController } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/ICliente';
import { Usuario } from 'src/app/interfaces/IUsuario';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-bitacora-empresa',
  templateUrl: './bitacora-empresa.page.html',
  styleUrls: ['./bitacora-empresa.page.scss'],
})
export class BitacoraEmpresaPage implements OnInit {
  
  @Input() cliente:Cliente;
  @Input('usuarios_sgo') usuarios:any;

  comentario:string ='';
  ticket:string='';
  destinatario:string='';
  enviada_por:string;
  constructor(private modalController:ModalController, private clienteService:ClienteService, private toastController:ToastController, private router:Router) { 
    this.clienteService.getUsuario().then((data)=>{
        this.enviada_por = data;
    });
  }
  back() {
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
  }

 async  enviar(){
  const toast = await this.toastController.create({
    message: 'Debe completar todos lo campos',
    duration: 2000,
    icon:'information-circle',
    color:"danger",
    position:"top"
  });
  console.log(this.comentario);
  
  if (this.comentario =='' || this.destinatario=='' || this.ticket=='') {
    await toast.present();
    
  }else{
    this.clienteService.crearTicket(this.comentario,this.ticket,this.destinatario, this.cliente.codigo_abonado,this.enviada_por).subscribe((res:any)=>{
      if (res.creado==="si"){
         toast.message= "ticket Creado";
         toast.color="success";
         toast.icon= "checkmark-circle";
         this.modalController.dismiss();
         setTimeout(()=>{

           toast.present();
         },1000);
      }
      
    });

  }
  }
}
