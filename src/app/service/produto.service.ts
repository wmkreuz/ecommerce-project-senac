import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos: Array<any> = [];

  produtosUrl = 'http://localhost:8080/api/produtos'

  constructor(private http: HttpClient) { this.carregar(); }

  listar(){
    return this.http.get<any[]>(`${this.produtosUrl}`);
  }

  carregar(){
    this.listar().subscribe(dados => this.produtos = dados);
  }

  listarPorId(produto_id:number){
    return this.produtos.find((produto:any)=>{
      if (produto.id == produto_id){
        return produto;
      }
    });
  }
  
  
}
