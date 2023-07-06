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

  public nomeValid: string = '';
  public emailValid: string = '';
  public senhaValid: string = '';

  constructor(private clienteService: ClienteService) {

  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.clienteService.listar().subscribe(dados => this.clientes = dados);
  }

  salvar() {
    this.validacao();
    if (this.nomeValid == 'is-valid' && this.emailValid == 'is-valid' && this.senhaValid == 'is-valid') {
      const index = this.clientes.findIndex(item => item.email === this.email);
      if (index !== -1) {
        alert("Email já cadastrado!")
      } else {
        this.clienteService.salvar(this.nome, this.email, this.senha);
      }
    } else {
      alert('O(s) campo(s) marcado(s) em vermelho são obrigatório(s)!')
    }
    this.listar();

  }

  validacao() {
    if (this.nome.trim().length > 0 && this.nome != 'null') {
      this.nomeValid = 'is-valid';
    } else {
      this.nomeValid = 'is-invalid';
    }

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
