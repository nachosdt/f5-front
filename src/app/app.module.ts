import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosAgotadosComponent } from './pages/productos-agotados/productos-agotados.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { EditModalComponent } from './components/modal/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './components/modal/delete-modal/delete-modal.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    HomeComponent,
    ProductosAgotadosComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    EditModalComponent,
    DeleteModalComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
