import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoService } from '../service/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Array<any> = [];

  carrinho: Array<any> = [];

  public quantidade:number = 1;
  
  constructor(private produtoService: ProdutoService, 
              private carrinhoService: CarrinhoService,private router: Router){}

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.produtoService.listar().subscribe(dados => this.produtos = dados);
  }

  /*adicionarAoCarrinho(produto: any): void {
    this.carrinhoService.adicionarProduto({
      "id":produto.id,
      "nome":produto.nome,
      "valor":produto.valor,
      "url":produto.url,
      "quantidade":this.quantidade,
      "total":this.quantidade * parseFloat(produto.valor)
    });
    
  }*/

  detalhar(produto: any){
    this.router.navigate(['/master/produto/',produto.id])
  }

}
