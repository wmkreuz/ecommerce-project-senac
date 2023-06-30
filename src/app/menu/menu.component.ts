import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor( private loginComponent: LoginComponent, private router: Router){

  }

  title = 'ecommerce';
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  logout() {
    this.loginComponent.logout();
    this.router.navigate(['/login'])
  }
  
}
