import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare var $: string;


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

  datos(){
    console.log('nombre','correo','mensaje');
  }




}
