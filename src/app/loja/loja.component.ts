import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../produto.model';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  

  constructor(
    public actived_route:ActivatedRoute,
    public produto_service:ProdutoService,
    public produtos: Produto[] = [
      new Produto(1, "Batata", 1.0, "teste"),
      new Produto(2, "Ovo", 1.2, "teste"),
      new Produto(3, "Pinga", 1.3, "teste")
    ],
    produto: Produto
  ){}

  ngOnInit(): void {
    
    for (let i = 0; i < this.produtos.length; i++) {
      this.produto_service.produtos.push(this.produtos[i]);
    }
    this.produto_service.salvar();


    console.log(this.produto_service.carregar());
    //this.produto_service.excluir(0);
    //this.produto_service.produtos.push();

  }
}
