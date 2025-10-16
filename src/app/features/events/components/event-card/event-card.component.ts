import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Event } from '../../../../Model/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {

 @Input() e:Event | undefined;
 @Output() myEventJs= new EventEmitter<number>();

 deleteFromcard(id:number){
  this.myEventJs.emit(id);
  }
}
