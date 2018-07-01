import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-main-header', templateUrl: './main-header.component.html', styleUrls: ['./main-header.component.scss']})
export class MainHeaderComponent implements OnInit {
  showSearchBox = false;
  constructor() {}

  toggleSearch() {
    this.showSearchBox = !this.showSearchBox;
  }
  ngOnInit() {}

}
