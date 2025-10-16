import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../../data-access/events.service';
import { Event } from '../../../../Model/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  constructor( private actR: ActivatedRoute, private eventS: EventsService){}
  id!:number;
  event?:Event;

  ngOnInit():void{
    //this.id = this.actR.snapshot.params['param'];
    this.actR.paramMap.subscribe(data => this.id = Number(data.get('param')));
   this.event = this.eventS.getEventById(this.id);
  }
  // getparam(){
  //   // this.id = Number(this.actR.snapshot.paramMap.get('param'));
  //   this.id = this.actR.snapshot.params['param'];

  // }
}
