import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Paquetes
import { SwiperModule } from 'swiper/angular';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    SlideshowComponent,
    NoImagePipe,
    SpinnerComponent,
    BusquedaComponent,
    ListadoNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
