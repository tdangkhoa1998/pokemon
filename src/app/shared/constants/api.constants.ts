import { environment } from './../../../environments/environment.prod';

const version: number = 2;

export const API = {
  POKEMONS: {
    GET_ALL: `${environment.baseURL}/api/v${version}/pokemon?offset=0&limit=50`,
    GET_DETAIL: `${environment.baseURL}/api/v${version}/pokemon/`,
  },
  ITEMS: {
    GET_ALL: `${environment.baseURL}/api/v${version}/item`,
    GET_DETAIL: `${environment.baseURL}/api/v${version}/item/`,
  }
}
