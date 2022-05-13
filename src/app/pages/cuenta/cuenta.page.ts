import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  info_usuario: any;
  codigo:string
  constructor(private clienteService:ClienteService) { 
    this.clienteService.getId().then((val)=>{
      console.log(val);
      this.codigo = val;
      
   }).then(()=>{

     this.clienteService.infoUsuario(this.codigo).subscribe((data)=>{
        this.info_usuario=data;
     });
   })
    
  }

  ngOnInit() {
  }

}
