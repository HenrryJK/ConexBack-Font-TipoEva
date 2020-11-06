import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TipoEva } from 'src/app/models/tipo-eva';
import { TipoEvaService } from 'src/app/services/tipo-eva.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-tipo-eva',
  templateUrl: './add-tipo-eva.component.html',
  styleUrls: ['./add-tipo-eva.component.css']
})
export class AddTipoEvaComponent implements OnInit {

  constructor(private tipoevaService:TipoEvaService,private router: Router) { }

  ngOnInit(): void {
  }
  tipoevaModel:TipoEva = new TipoEva();
  onSubmit(){

  }
  public create():void{
      this.tipoevaService.addTipoEva(this.tipoevaModel).subscribe(
        response=>this.router.navigate(['/tipoeva'])
      )
  }
}
