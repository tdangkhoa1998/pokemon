import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from "rxjs/operators";
import { API } from 'src/app/shared/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get(API.POKEMONS.GET_ALL).pipe(take(1));
  }

  getPokemonById(id: number) {
    return this.http.get(`${API.POKEMONS.GET_DETAIL}${id}`).pipe(take(1));
  }


}
