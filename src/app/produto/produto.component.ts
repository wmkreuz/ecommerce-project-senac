import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoService } from '../service/carrinho.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Array<any> = [];

  id: number = 0;
  nome: string = '';
  valor: number = 0;
  url: string = '';
  destaque: number = 0;
  novo: number = 0;

  carrinho: Produto[] = [];

  //produto!: Produto;
  
  constructor(private produtoService: ProdutoService, 
              private carrinhoService: CarrinhoService){}

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.produtoService.listar().subscribe(dados => this.produtos = dados);
  }

  adicionarAoCarrinho(produto: Produto): void {
    produto = new Produto(this.id, this.nome, this.valor, this.url, this.destaque, this.novo)
    console.log(produto)
    this.carrinhoService.adicionarProduto(produto);
  }

}
