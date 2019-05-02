import { Component } from '@angular/core';
import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
  
})

export class NavComponent {

    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
}
