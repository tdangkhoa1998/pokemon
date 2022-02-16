import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    AppSharedModule,
    PokemonRoutingModule,
    PaginationModule.forRoot()
  ],
  declarations: [PokemonComponent]
})
export class PokemonModule { }
