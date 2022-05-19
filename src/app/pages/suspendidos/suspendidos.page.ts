import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/ICliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-suspendidos',
  templateUrl: './suspendidos.page.html',
  styleUrls: ['./suspendidos.page.scss'],
})
export class SuspendidosPage implements OnInit {
  codigo_venta:string;
  clientes:Cliente[];
  searchItem: Cliente[];

  constructor(private clienteService:ClienteService, private menuController:MenuController) { 
    this.menuController.close();

    this.clienteService.getCodigo_venta().then((val)=>{
      this.codigo_venta = val;
      
   }).then(()=>{

     this.clienteService.getSuspendidos(this.codigo_venta).subscribe((data:any)=>{
       console.log(data);
       
        this.clientes=data.suspendidos
        
     });
   })
  }

  ngOnInit() {
  }
  suspendidosChange(event){
    console.log(event.detail.value);
    const val = event.target.value;

    this.searchItem = this.clientes;
    if (val && val.trim()) {
      
      this.searchItem = this.searchItem.filter((item:Cliente)=>{
        console.log( typeof item.codigo_abonado);
        let abonado = item.codigo_abonado.toString();
        return (abonado.indexOf(val.toLowerCase())> -1 || item.nombre.toLowerCase().indexOf(val.toLowerCase())>-1 );
      })
    }
    
}

}
