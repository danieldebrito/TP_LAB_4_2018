import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// secciones
import { PageNotFoundComponent } from '../component/seccions/page-not-found/page-not-found.component';
import { HomeComponent } from '../component/seccions/home/home/home.component';
import { GamesGridComponent } from '../component/seccions/games-grid/games-grid.component';
import { QuienSoyComponent } from '../component/seccions/quien-soy/quien-soy.component';

// juegos
import { AdivinaElNumeroComponent } from '../component/games/adivina-el-numero/adivina-el-numero.component';
import { AdivinaLaCapitalComponent } from '../component/games/adivina-la-capital/adivina-la-capital.component';
import { MostrarPaisesComponent } from '../component/games/mostrar-paises/mostrar-paises.component';
import { AnagramaComponent } from '../component/games/anagrama/anagrama.component';
import { PptComponent } from '../component/games/ppt/ppt.component';
import { TatetiComponent } from '../component/games/tateti/tateti.component';
import { AgilidadAritmeticaComponent } from '../component/games/agilidad-aritmetica/agilidad-aritmetica.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesGridComponent },
  { path: 'p', component: MostrarPaisesComponent },
  { path: 'adivinaNumero', component: AdivinaElNumeroComponent },
  { path: 'adivinaCapital', component: AdivinaLaCapitalComponent },
  { path: 'anagrama', component: AnagramaComponent },
  { path: 'ppt', component: PptComponent },
  { path: 'tateti', component: TatetiComponent },
  { path: 'aritmetica', component: AgilidadAritmeticaComponent },
  { path: 'quien', component: QuienSoyComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
