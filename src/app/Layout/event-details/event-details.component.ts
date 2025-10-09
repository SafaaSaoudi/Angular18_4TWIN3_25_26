import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  constructor( private actR: ActivatedRoute){}
  id!:number;

  ngOnInit():void{
    //this.id = this.actR.snapshot.params['param'];
    this.actR.paramMap.subscribe(data => this.id = Number(data.get('param')));
  
  }
  // getparam(){
  //   // this.id = Number(this.actR.snapshot.paramMap.get('param'));
  //   this.id = this.actR.snapshot.params['param'];

  // }
}
