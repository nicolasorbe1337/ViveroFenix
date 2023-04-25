import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup;
  loading = false;
  

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    })
  }


  ingresar(){
    
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
      if(usuario == 'fenix' && password=='22') {
        this.router.navigate(['dashboard'])
      } else {
        this.error();
        this.form.reset();
      }

  }

  error() {
    this._snackBar.open(' ¡Usuario o contraseña incorrecta!','',{
      duration: 5000,
      horizontalPosition:'center',
        verticalPosition:'top',
    })
  }

  fakeloading(){
    this.loading = true;
    setTimeout(() => {
      
    }, 1500);
  }
  

}






