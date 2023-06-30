import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { BlogComponent } from './blog/blog.component';
import { CarrinhoDetalheComponent } from './carrinho-detalhe/carrinho-detalhe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { MasterComponent } from './master/master.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AuthGuard } from './auth.guard.module';

/*const routes: Routes = [
    { path:'', component:HomeComponent},
    { path:'home', component:HomeComponent},
    { path:'loja', component:LojaComponent},
    { path:'blog', component:BlogComponent},
    { path:'carrinho', component:CarrinhoDetalheComponent}
  ];*/

  /*const routes: Routes = [
    { path:'', component:LoginComponent},
    { path:'home', component:HomeComponent},
    { path:'register', component:RegisterComponent},
    { path:'loja', component:LojaComponent},
    { path:'blog', component:BlogComponent},
    { path:'carrinho', component:CarrinhoDetalheComponent},
    { path:'layout', component:LayoutComponent}
  ];*/

  const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'master',
        component: MasterComponent, canActivate: [AuthGuard],
        children: [
        { path: 'home', component: HomeComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'loja', component: LojaComponent },
        { path: 'carrinho', component: CarrinhoDetalheComponent },
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