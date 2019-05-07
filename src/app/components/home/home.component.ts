import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare var $: any;


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }
  

  

}
