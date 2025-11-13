import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EventsComponent,
    AddEventComponent,
    ListEventsComponent,
    EventCardComponent,
    SearchBarComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
