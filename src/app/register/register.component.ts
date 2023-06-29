import { HttpClient } from '@angular/common/http';
import { ClienteService } from '../service/cliente.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  clientes: Array<any> = [];

  nome: string = "";
  email: string = "";
  senha: string = "";

  constructor( private clienteService: ClienteService ){

  }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.clienteService.listar().subscribe(dados => this.clientes = dados);
  }  

  salvar(){
    const index = this.clientes.findIndex(item => item.email === this.email );
    if (index !== -1) {
      alert("Email já cadastrado!")
    } else {
      this.clienteService.salvar(this.nome,this.email,this.senha);
    }
  }

}
