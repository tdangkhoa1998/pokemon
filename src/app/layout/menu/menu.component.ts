import { Component, OnInit } from '@angular/core';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  listOfGameVersion: string[];
  listOfGeneration: string[];

  constructor(private menuService: MenuService) {
    this.listOfGameVersion = [];
    this.listOfGeneration = [];
  }

  ngOnInit() {
    this.getAllVersion();
    this.getAllGeneration();
  }

  getAllVersion() {
    this.menuService.getAllGameVersion().subscribe((res: any) => {
      const results = res?.results || [];
      results.forEach(element => {
        this.listOfGameVersion.push(element?.name);
      });
    })
  }

  getAllGeneration() {
    this.menuService.getAllGeneration().subscribe((res: any) => {
      const results = res?.results || [];
      results.forEach(element => {
        this.listOfGeneration.push(element?.name);
      });
    })
  }


}
