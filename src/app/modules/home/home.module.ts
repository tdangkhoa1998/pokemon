import { NgModule } from "@angular/core";
import { AppSharedModule } from "src/app/shared/shared.module";
import { ItemsComponent } from "./components/items/items.component";
import { PokemonsComponent } from "./components/pokemons/pokemons.component";
import { TrailersComponent } from "./components/trailers/trailers.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  imports: [
    AppSharedModule,
    HomeRoutingModule,
    CarouselModule.forRoot(),
    YouTubePlayerModule
  ],
  declarations: [HomeComponent, TrailersComponent, PokemonsComponent, ItemsComponent],
})
export class HomeModule { }
