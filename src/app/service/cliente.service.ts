import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientesUrl = 'http://localhost:8080/api/clientes'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.clientesUrl}`);
  }

  salvar(nome: string, email: string, senha: string) {

    let bodyData = {
      "nome": nome,
      "email": email,
      "senha": btoa(senha)
    };

    this.http.post("http://localhost:8080/api/cliente", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      alert("Cadastro realizado com sucesso!")
    })

  }

}
