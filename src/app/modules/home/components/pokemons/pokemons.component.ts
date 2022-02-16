import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  listOfData: Pokemon[];

  isVisiblePokemonDetail: boolean;
  pokemonName: string;

  constructor(private pokemonService: PokemonsService) {
    this.listOfData = [];
  }

  ngOnInit() {
    this.getListPokemon(10)
  }

  getListPokemon(count: number) {
    for (let index = 1; index <= count; index++) {
      this.pokemonService.getPokemonById(index).subscribe((res: any) => {
        this.listOfData.push(res);
      });
    }
  }

  onViewPokemonInfo(name: string) {
    this.pokemonName = name;
    this.isVisiblePokemonDetail = true;
  }

  onClosePokemonInfo() {
    this.pokemonName = "";
    this.isVisiblePokemonDetail = false;
  }

}
