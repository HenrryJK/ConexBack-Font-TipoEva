import { Component, OnInit } from '@angular/core';
import { TipoEva } from 'src/app/models/tipo-eva';
import { TipoEvaService } from 'src/app/services/tipo-eva.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-tipo-eva',
  templateUrl: './listar-tipo-eva.component.html',
  styleUrls: ['./listar-tipo-eva.component.css']
})
export class ListarTipoEvaComponent implements OnInit {
tipoeva : TipoEva[];
displayedColumns : string [] = ['ID_TIPO_EVA' , 'NOMBRE']
  constructor(private TipoEvaService:TipoEvaService) { }
  
  ngOnInit(): void {
    this.TipoEvaService.getTipoEvas().subscribe(
      (data)=>{
        this.tipoeva = data['cursor_tip_evaluacion'];
        alert(this.tipoeva);
      }
    )
  }

  delTipoEva(num:number):void{
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }

}
