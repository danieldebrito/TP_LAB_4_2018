import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// services
import { HttpModule } from '@angular/http';

// rutas
import { AppRoutingModule } from './routes/app-routing.module';

// styles
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModule } from './styles/ngBootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './styles/material';
import { PrimeNGModule } from './styles/primeNG';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// layout
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { BodyComponent } from './component/layout/body/body.component';
import { AsideComponent } from './component/layout/aside/aside.component';
import { FooterComponent } from './component/layout/footer/footer.component';

// seccions
import { NgbCarouselComponent } from './component/seccions/home/ngb-carousel/ngb-carousel.component';
import { HomeComponent } from './component/seccions/home/home/home.component';
import { PageNotFoundComponent } from './component/seccions/page-not-found/page-not-found.component';
import { AdivinaElNumeroComponent } from './component/games/adivina-el-numero/adivina-el-numero.component';
import { MostrarPaisesComponent } from './component/games/mostrar-paises/mostrar-paises.component';
import { CardGamesComponent } from './component/seccions/card-games/card-games.component';
import { QuienSoyComponent } from './component/seccions/quien-soy/quien-soy.component';
import { AdivinaLaCapitalComponent } from './component/games/adivina-la-capital/adivina-la-capital.component';
import { GamesGridComponent } from './component/seccions/games-grid/games-grid.component';
import { AnagramaComponent } from './component/games/anagrama/anagrama.component';
import { PptComponent } from './component/games/ppt/ppt.component';
import { TatetiComponent } from './component/games/tateti/tateti.component';
import { AgilidadAritmeticaComponent } from './component/games/agilidad-aritmetica/agilidad-aritmetica.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent,
    AsideComponent,
    FooterComponent,
    AppComponent,
    NgbCarouselComponent,
    HomeComponent,
    PageNotFoundComponent,
    AdivinaElNumeroComponent,
    MostrarPaisesComponent,
    CardGamesComponent,
    QuienSoyComponent,
    AdivinaLaCapitalComponent,
    GamesGridComponent,
    AnagramaComponent,
    PptComponent,
    TatetiComponent,
    AgilidadAritmeticaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    BootstrapModule,
    PrimeNGModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
