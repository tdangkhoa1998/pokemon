import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { API } from 'src/app/shared/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllItem(pageSize: number,pageIndex: number) {
    return this.http.get(`${API.POKEMONS.GET_ALL}?offset=${pageIndex || 0}&limit=${pageSize}`).pipe(take(1));
  }

  getPokemonById(id: number) {
    return this.http.get(`${API.POKEMONS.GET_DETAIL}${id}`).pipe(take(1));
  }

  getPokemonByName(name: string) {
    return this.http.get(`${API.POKEMONS.GET_DETAIL}${name}`).pipe(take(1));
  }

}
