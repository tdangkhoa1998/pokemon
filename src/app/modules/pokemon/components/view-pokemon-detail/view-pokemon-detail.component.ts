import { Pokemon } from './../../../../shared/models/pokemon.model';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'view-pokemon-detail',
  templateUrl: './view-pokemon-detail.component.html',
  styleUrls: ['./view-pokemon-detail.component.scss']
})
export class ViewPokemonDetailComponent implements OnInit, OnChanges {
  @Input() pokemonName: string;
  @Input() isVisible: boolean;
  @Output() onCloseInfo: EventEmitter<boolean> = new EventEmitter(false);

  pokemonInfo: Pokemon;

  constructor(private pokemonService: PokemonService) {
    this.pokemonName = "";
    this.isVisible = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.pokemonName?.currentValue) {
      if (changes?.isVisible?.currentValue) {
        this.getPokemonInfo();
      }
    }
  }

  ngOnInit() {
  }

  getPokemonInfo() {
    this.pokemonService.getPokemonByName(this.pokemonName).subscribe((res: any) => {
      this.pokemonInfo = {
        ...res,
        species: res?.species,
        sprites: res?.sprites
      }
    })
  }

  onClose() {
    this.isVisible = false;
    this.pokemonName = "";
    this.onCloseInfo.emit(true);
  }

}
