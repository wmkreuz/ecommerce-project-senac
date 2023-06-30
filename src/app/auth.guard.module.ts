import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public logado: boolean = false;

  constructor(private router: Router) {}

  canActivate(): boolean {
    /*if (this.loginComponent.isAuthenticated() == true) {
      //this.router.navigate(['/loja']);
      console.log("logado:"+this.loginComponent.logado)
      return this.logado;
    } else {
      //this.router.navigate(['/login']);
      return this.logado;
    }*/
    if(this.logado != true){
      this.router.navigate(['/login'])
      
    }
    return this.logado
   
  }
}
