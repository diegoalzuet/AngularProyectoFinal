import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit,AfterViewInit,OnDestroy {

  constructor() {
    console.log('MENU - CONSTRUCTOR');
  }
  ngAfterViewInit(): void {
    console.log('MENU - AFTER VIEW INIT');
  }
  ngOnDestroy(): void {
    console.log('MENU - ON DESTROY');
  }

  ngOnInit(): void {
    console.log('MENU - ON INIT');
  }

}
