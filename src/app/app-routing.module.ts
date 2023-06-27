import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { BlogComponent } from './blog/blog.component';
import { CarrinhoDetalheComponent } from './carrinho-detalhe/carrinho-detalhe.component';

const routes: Routes = [
    { path:'', component:HomeComponent},
    { path:'home', component:HomeComponent},
    { path:'loja', component:LojaComponent},
    { path:'blog', component:BlogComponent},
    { path:'carrinho', component:CarrinhoDetalheComponent}
  ];

  @NgModule({  
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule { }