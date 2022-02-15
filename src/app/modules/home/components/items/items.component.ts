import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from "rxjs/operators";
import { Item } from 'src/app/shared/models/item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  listOfData: Item[];

  constructor(private itemService: ItemService, private httpClient: HttpClient) {
    this.listOfData = [];
  }

  ngOnInit() {
    this.itemService.getAllItem(10).subscribe((res: any) => {
      const results: any[] = res.results || [];
      if (results.length != 0) {
        results.forEach(element => {
          this.httpClient.get(element.url).pipe(take(1)).subscribe((res: any) => {
            this.listOfData.push({
              name: res?.name,
              sprites: res?.sprites
            }
            );
          });
        });
      }
    });
  }

}
