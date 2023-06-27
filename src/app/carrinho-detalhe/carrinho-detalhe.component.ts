import { Component } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho-detalhe',
  templateUrl: './carrinho-detalhe.component.html',
  styleUrls: ['./carrinho-detalhe.component.css']
})
export class CarrinhoDetalheComponent {

  constructor(public carrinhoService: CarrinhoService) { }

}
