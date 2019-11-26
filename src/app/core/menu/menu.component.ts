import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      new MenuItem("Movie","/movies/list","Movies List"),
      new MenuItem("Actor","/actors/list","Actors List"),
      new MenuItem("Credit","/credits/list","Credits List")
    ];
  }

}
