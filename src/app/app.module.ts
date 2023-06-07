import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    HomeComponent,
    ProdutoComponent,
    LojaComponent,
    RodapeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
