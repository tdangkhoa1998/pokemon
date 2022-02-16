import { environment } from './../../../environments/environment.prod';

const version: number = 2;

export const API = {
  POKEMONS: {
    GET_ALL: `${environment.baseURL}/api/v${version}/pokemon`,
    GET_DETAIL: `${environment.baseURL}/api/v${version}/pokemon/`,
  },
  ITEMS: {
    GET_ALL: `${environment.baseURL}/api/v${version}/item`,
    GET_DETAIL: `${environment.baseURL}/api/v${version}/item/`,
  },
  GAMES: {
    GET_GENERATIONS: `${environment.baseURL}/api/v${version}/generation`,
    GET_VERSION: `${environment.baseURL}/api/v${version}/version`
  }
}
