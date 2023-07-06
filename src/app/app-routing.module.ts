import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { CarrinhoDetalheComponent } from './carrinho-detalhe/carrinho-detalhe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MasterComponent } from './master/master.component';
import { AuthGuard } from './auth.guard.module';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

  const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'master',
        component: MasterComponent, canActivate: [AuthGuard],
        children: [
        { path: 'home', component: HomeComponent },
        { path: 'loja', component: LojaComponent },
        { path: 'carrinho', component: CarrinhoDetalheComponent },
        { path: 'produto', component: ProdutoDetalheComponent },
        { path: 'produto/:id', component: ProdutoDetalheComponent}
        ],
    },
  ];



  @NgModule({  
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule { }