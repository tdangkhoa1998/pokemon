import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { API } from 'src/app/shared/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getAllGameVersion() {
    return this.http.get(`${API.GAMES.GET_VERSION}?offset=0&limit=${Number.MAX_SAFE_INTEGER}`).pipe(take(1));
  }

  getAllGeneration() {
    return this.http.get(`${API.GAMES.GET_GENERATIONS}?offset=0&limit=${Number.MAX_SAFE_INTEGER}`).pipe(take(1));
  }


}
