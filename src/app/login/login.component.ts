import { Component,OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientes: Array<any> = [];

  email: string = "";
  senha: string = "";

  public logado: boolean = false;

  constructor( private clienteService: ClienteService, private router: Router ){

  }

  ngOnInit(): void {
    this.listar();
  }

  login(){
    const index = this.clientes.findIndex(item => (item.email === this.email) && (item.senha === this.senha) );
    if (index !== -1) {
      this.router.navigateByUrl('/home')
      this.logado = true;
    } else {
      alert("O login falhou!")
    }
  }

  listar(){
    this.clienteService.listar().subscribe(dados => this.clientes = dados);
  }  

}
