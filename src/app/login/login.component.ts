import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientes: Array<any> = [];

  email: string = "";
  senha: string = "";

  public emailValid: string = '';
  public senhaValid: string = '';

  public logado: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router, private authGuard: AuthGuard) {

  }

  ngOnInit(): void {
    this.listar();
  }

  login() {
    this.validacao();
    if (this.emailValid == 'is-valid' && this.senhaValid == 'is-valid') {
      const index = this.clientes.findIndex(item => (item.email === this.email) && (item.senha === btoa(this.senha)));
      console.log(index)
      if (index !== -1) {
        this.router.navigate(['master/home'])
        this.logado = true;
      } else {
        alert("O login falhou!")
        this.logado = false;
      }
      this.alterarStatusAuth();
    } else {
      alert('O(s) campo(s) marcado(s) em vermelho são obrigatório(s)!')
    }

  }

  listar() {
    this.clienteService.listar().subscribe(dados => this.clientes = dados);
  }

  logout() {
    this.logado = false;
  }

  isAuthenticated(): boolean {
    return this.logado;
  }

  alterarStatusAuth() {
    if (this.isAuthenticated() == true) {
      this.authGuard.logado = true;
    } else {
      this.authGuard.logado = false;
    }
  }

  validacao() {

    if (this.email.trim().length > 0 && this.email != 'null') {
      this.emailValid = 'is-valid';
    } else {
      this.emailValid = 'is-invalid';
    }

    if (this.senha.trim().length > 0 && this.senha != 'null') {
      this.senhaValid = 'is-valid';
    } else {
      this.senhaValid = 'is-invalid';
    }
  }

}
