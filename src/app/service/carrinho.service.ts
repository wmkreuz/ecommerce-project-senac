import { Injectable } from '@angular/core';
//import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho: Array<any> = [];
  qtdeProdutos: number = 0;

  constructor() { }

  adicionarProduto(produto: any): void {
    this.atualizarProduto(produto, this.carrinho);
  }

  getValorTotal(){
    let total = 0;
    this.carrinho.forEach(
      (produto:any) => {
        total += produto.quantidade*produto.total;
      }
    );
    return total;
  }

  excluir(indice:number){
    this.carrinho.splice(indice,1);
    this.qtdeProdutos = this.carrinho.length;
  }

  atualizarProduto(produto: any, carrinho: any[]) {
    const index = carrinho.findIndex(item => item.id === produto.id);
  
    if (index !== -1) {
      carrinho[index].valor += produto.valor;
      carrinho[index].quantidade += produto.quantidade;
    } else {
      this.carrinho.push(produto);
    }

    this.qtdeProdutos += 1;
  }

}
