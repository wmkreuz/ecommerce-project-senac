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
    
  ){}

  ngOnInit(): void {
    
    

  }
}
