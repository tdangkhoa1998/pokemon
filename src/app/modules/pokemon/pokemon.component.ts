import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CONFIG } from 'src/app/shared/constants/config.constants';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from '../pokemon/pokemon.service';
import { take } from "rxjs/operators";
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  listOfData: Pokemon[];
  pageSize: number;
  pageIndex: number;

  isVisiblePokemonDetail: boolean;
  pokemonName: string;
  listOfPaginationDropdown: number[];
  totalItems: number;
  isJapanese: boolean;

  constructor(private pokemonService: PokemonService, private httpClient: HttpClient) {
    this.listOfData = [];
    this.pageSize = CONFIG.PAGE_SIZE;
    this.pageIndex = CONFIG.PAGE_INDEX;
    this.listOfPaginationDropdown = CONFIG.PAGINATION_DROPDOWN;
    this.totalItems = 0;
  }

  ngOnInit() {
    this.getListPokemon();
  }

  getListPokemon() {
    this.listOfData = [];
    this.pokemonService.getAllItem(this.pageSize, this.pageIndex).subscribe((res: any) => {
      this.totalItems = res?.count || 0;
      const results: any[] = res.results || [];
      if (results.length != 0) {
        results.forEach(element => {
          this.pokemonService.getPokemonByName(element?.name).subscribe((res: any) => {
            this.listOfData.push(res);
          })
        });
      }
    })
  }

  onViewPokemonInfo(name: string) {
    this.pokemonName = name;
    this.isVisiblePokemonDetail = true;
  }

  onClosePokemonInfo() {
    this.pokemonName = "";
    this.isVisiblePokemonDetail = false;
  }

  onPageIndexChange(event) {
    this.pageIndex = (this.pageSize + 1) * (event.page - 1);
    this.getListPokemon();
  }

  onPageSizeChange() {
    this.pageIndex = CONFIG.PAGE_INDEX;
    this.getListPokemon();
  }

}
