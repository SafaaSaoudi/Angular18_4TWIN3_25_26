import { Component } from '@angular/core';
import { Event } from '../../../../Model/event';
import { EventsService } from '../../../../data-access/events.service';


@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {
 Eventlist!:Event[];

    constructor(private eventS:EventsService){}

    ngOnInit(): void {
      this.Eventlist=this.eventS.listEvents;
    }
}
