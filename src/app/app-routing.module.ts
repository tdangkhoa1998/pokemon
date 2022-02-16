import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import("src/app/modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import("src/app/modules/pokemon/pokemon.module").then(m => m.PokemonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
