import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import { LojaComponent } from './loja/loja.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BlogComponent } from './blog/blog.component';
import { ProdutoService } from './service/produto.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoDetalheComponent } from './carrinho-detalhe/carrinho-detalhe.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './service/cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    HomeComponent,
    ProdutoComponent,
    LojaComponent,
    RodapeComponent,
    BlogComponent,
    CarrinhoComponent,
    CarrinhoDetalheComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [ ProdutoService, ClienteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
