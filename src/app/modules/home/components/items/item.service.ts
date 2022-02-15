import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from "rxjs/operators";
import { API } from 'src/app/shared/constants/api.constants';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItem(pageNumber: number) {
    return this.http.get(`${API.ITEMS.GET_ALL}?offset=0&limit=${pageNumber}`).pipe(take(1));
  }

  getItemById(id: number) {
    return this.http.get(`${API.ITEMS.GET_DETAIL}${id}`).pipe(take(1));
  }

}
