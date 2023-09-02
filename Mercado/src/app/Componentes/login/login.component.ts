import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup

  constructor(private FormBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.formLogin = FormBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
    })
  }

  login() {
    if (this.formLogin.valid) {
      this.auth.login(this.formLogin.value)
      .then((user)=>{
        console.log(user)
        this.router.navigate(['home'])
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }

}
