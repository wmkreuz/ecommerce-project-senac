import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit{

  public produto:any;

  public produtos: Array<any> = [];

  carrinho: Array<any> = [];

  public quantidade:number = 1;

  constructor(
    public activated_route: ActivatedRoute,
    public produtoService: ProdutoService, 
    public carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.produtoService.listar().subscribe(dados => this.produtos = dados);
    this.listarPorId();
  }

  listarPorId(){
    this.activated_route.params
    .subscribe((_params:any) => {
      this.produto = this.produtoService.listarPorId(_params.id)
    })
  }

  adicionarAoCarrinho(produto: any): void {
    this.carrinhoService.adicionarProduto({
      "id":produto.id,
      "nome":produto.nome,
      "valor":produto.valor,
      "url":produto.url,
      "quantidade":this.quantidade,
      "total":this.quantidade * parseFloat(produto.valor)
    });
  }

}
