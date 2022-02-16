import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss']
})
export class TrailersComponent implements OnInit {
  slides = [
  "D0zYJ1RQ-fs",
  "1roy4o4tqQM",
  "bILE5BEyhdo",
  "uBYORdr_TY8"
  ];
  constructor() { }

  ngOnInit() {
  }

}
