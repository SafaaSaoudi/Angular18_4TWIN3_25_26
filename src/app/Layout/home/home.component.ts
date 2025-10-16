import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})

export class HomeComponent {


  MyCollection=["TWIN1","4TWIN2","4TWIN3","TWIN4"];
  isDark=true;

  constructor(private R:Router){}

  showEvents(){
    this.R.navigate(["events"]);
  }


}
