import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosUrl = 'http://localhost:8080/api/produtos'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.produtosUrl}`);
  }
  
}
