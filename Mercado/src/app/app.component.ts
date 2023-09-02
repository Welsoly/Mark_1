import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Supermarket';
  constructor(private auth: AuthService, private router: Router){}

  logout(){
      this.auth.logout()
      .then(()=>{
    this.router.navigate(['login'])
    })

  }
}
