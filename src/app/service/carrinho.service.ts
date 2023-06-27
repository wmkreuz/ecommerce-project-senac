import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho: Produto[] = [];

  constructor() { }

  adicionarProduto(produto: Produto): void {
    this.carrinho.push(produto);
  }
}
